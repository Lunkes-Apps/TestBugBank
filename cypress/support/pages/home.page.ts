import { LoginPage } from "./login.page";
import { TransferPage } from "./transfer.page";

export class HomePage{

    goHome = (): HomePage =>{
        cy.visit('/home')
        return this
    }

    clickTransfer = (): TransferPage =>{
        cy.get('#btn-TRANSFERÊNCIA').click()
        return new TransferPage()
    }

    getBalance = (): Cypress.Chainable<JQuery<HTMLElement>>  =>{
        return cy.get('#textBalance')
    }

    logout = (): LoginPage =>{
        cy.get('#btnExit').click()
        return new LoginPage()
    }


}