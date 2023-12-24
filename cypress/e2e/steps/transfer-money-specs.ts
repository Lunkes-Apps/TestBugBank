import { DataTable, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Account } from "../../support/interfaces/account";
import { TransferPage } from "../../support/pages/transfer.page";

var accounts: Account[] = []

Given('We have two accounts with balance', (accountsList: DataTable) => {

    accountsList.rows().forEach(account => {

        cy.loginPage().then(($loginPage) => {

            var acc = $loginPage.clickRegister()
                .fillEmailRegistering(account[1])
                .fillNameRegistering(account[2])
                .fillPasswordRegistering(account[3])
                .fillPasswordConfirmation(account[3])
                .toggleAddBalance(true)
                .clickSendRegistration()
                .confirmSuccessRegistration()
            accounts.push(acc)

        })
    })

})


When('Access the account {string} {string}', (account: string, password: string) => {
    cy.loginPage().then(($loginPage) => {

        $loginPage
            .fillEmail(account)
            .fillPassword(password)
            .clickAccessAccount()

    })
})

When('Transfer money from account A to account B', (valuesList: DataTable) => {
    var accountNumber = accounts[1].accountNumber.split(/-/)[0]
    var digit = accounts[1].accountNumber.split(/-/)[1]

    cy.homePage().then($homePage => {
        let transferPage: TransferPage = $homePage.clickTransfer()

        valuesList.rows().forEach(value => {
            transferPage.fillAccountNumber(accountNumber, digit)
                .fillValue(value[0])
                .fillDetails(value[1])
                .sendTransation()
        })
    })

})

Then('The final result should be',(valuesList: DataTable)=>{
    var balanceA = valuesList.rows()[0][1]
    var balanceB = valuesList.rows()[1][1]
        
    cy.homePage().then($homePage => {
        //Home page Account A
        $homePage.goHome()
            .getBalance().should('contain.text',balanceA)
        $homePage.logout()
        //Login Page
        .fillEmail(accounts[1].email)
        .fillPassword(accounts[1].password)
        .clickAccessAccount()
        //Home Page Account B
        .getBalance().should('contain.text',balanceB)
    })

    


})