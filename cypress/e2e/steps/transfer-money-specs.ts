import { DataTable, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Account } from "../../support/interfaces/account";
import { TransferPage } from "../../support/pages/transfer.page";
import { LoginPage } from "../../support/pages/login.page";

var accounts: Account[] = []

var loginPage: LoginPage = new LoginPage()

Given('We have two accounts with balance', (accountsList: DataTable) => {

    accountsList.rows().forEach(account => {
        loginPage
            .clickButtonRegister()
            .register(account[1], account[2], account[3], account[3], true)
    })

})


When('Access the account {string} {string}', (account: string, password: string) => {
    loginPage
        .login(account, password)
})

When('Transfer money from account A to account B', (valuesList: DataTable) => {
    var accountNumber = accounts[1].accountNumber.split(/-/)[0]
    var digit = accounts[1].accountNumber.split(/-/)[1]

    // cy.homePage().then($homePage => {
    //     let transferPage: TransferPage = $homePage.clickTransfer()

    //     valuesList.rows().forEach(value => {
    //         transferPage.fillAccountNumber(accountNumber, digit)
    //             .fillValue(value[0])
    //             .fillDetails(value[1])
    //             .sendTransation()
    //     })
    // })

})

Then('The final result should be', (valuesList: DataTable) => {
    var balanceA = valuesList.rows()[0][1]
    var balanceB = valuesList.rows()[1][1]

    // cy.homePage().then($homePage => {
    //     //Home page Account A
    //     $homePage.goHome()
    //         .getBalance().should('contain.text', balanceA)
    //     $homePage.logout()
    //     //Login Page

    // })




})