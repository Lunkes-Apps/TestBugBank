import { DataTable, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Account } from "../../support/interfaces/account";
import { TransferPage } from "../../support/pages/transfer.page";
import { LoginPage } from "../../support/pages/login.page";
import { HomePage } from "../../support/pages/home.page";

var accounts: Account[] = []

var loginPage: LoginPage = new LoginPage()
var homePage: HomePage = new HomePage()

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

    var transferPage: TransferPage = homePage.clickTransfer()

    valuesList.rows().forEach(row => {
        
        cy.getAccount(row[0]).then($account => {
            var number = $account.accountNumber.split('-')[0]
            var digit = $account.accountNumber.split('-')[1]
            transferPage
                .fillAccountNumber(number, digit)
                .fillValue(row[1])
                .fillDetails(row[2])
                .sendTransation()

        })

    })

})


Then('The final result should be', (valuesList: DataTable) => {
    
    var balanceA = valuesList.rows()[0][1]
    var balanceB = valuesList.rows()[1][1]

    var EmailA = valuesList.rows()[0][0]
    var EmailB = valuesList.rows()[1][0]
        
    cy.getAccount(EmailA).then($account => {
        expect($account.balance.toString()).equal(balanceA)
    })

    cy.getAccount(EmailB).then($account => {
        expect($account.balance.toString()).equal(balanceB)
    })
   
})