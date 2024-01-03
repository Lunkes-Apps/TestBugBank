// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { Account } from "./interfaces/account"


Cypress.Commands.add('fillField', (field: string, text: string) => {
    return cy.get(field)
        .clear({ force: true })
        .type(text, { force: true })
})

Cypress.Commands.add('getAccount', (email: string) => {
    return cy.getAllLocalStorage().then($var => {
        var accountNumber = $var['https://bugbank.netlify.app'][email]
        console.log(accountNumber)
        return JSON.parse(window.localStorage[email]) as Account
    }).then($accountNumber=>{})
})

