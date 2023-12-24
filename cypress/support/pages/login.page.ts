import { Account } from "../interfaces/account"
import { HomePage } from "./home.page"

export class LoginPage {
    account: Account = {}

    fillEmailRegistering = (email: string): LoginPage => {
        this.account.email = email

        cy.get('[type="email"]',)
            .eq(1).clear({ force: true })
            .type(email, { force: true })
        return this
    }

    fillEmail = (email: string): LoginPage => {
        cy.get('[type="email"]')
            .eq(0).clear({ force: true })
            .type(email, { force: true })
        return this
    }

    fillPassword = (password: string): LoginPage => {
        cy.get('[name="password"]').eq(0)
            .clear({ force: true })
            .type(password, { force: true })
        return this
    }

    clickAccessAccount = (): HomePage => {
        cy.get('button').contains('Acessar').click()
        return new HomePage()
    }

    clickRegister = (): LoginPage => {
        cy.get('button').contains('Registrar').click({force: true} )
        return this
    }

    fillNameRegistering = (name: string): LoginPage => {
        this.account.name = name

        cy.get('[name="name"]')
            .clear({ force: true })
            .type(name, { force: true })
        return this
    }

    fillPasswordRegistering = (password: string): LoginPage => {
        this.account.password = password

        cy.get('[name="password"]').eq(1)
            .clear({ force: true })
            .type(password, { force: true })
        return this
    }

    fillPasswordConfirmation = (password: string): LoginPage => {
        cy.get('[name="passwordConfirmation"]')
            .clear({ force: true })
            .type(password, { force: true })
        return this
    }

    toggleAddBalance = (toggle: boolean): LoginPage => {
        cy.get('#toggleAddBalance').parent().then(($element) => {
            //hsmFIT = true
            console.log('oi', ($element.attr('class').match(/hsmFIT/)))
            console.log(toggle)
            if ($element.attr('class').match(/hsmFIT/) == null && toggle){
                cy.get('#toggleAddBalance').click({force: true})
                console.log('click')
            }
        })
        return this
    }

    clickSendRegistration = (): LoginPage => {
        cy.get('button').contains('Cadastrar').click({ force: true })
        return this
    }

    confirmSuccessRegistration = (): Account => {
        cy.get('#modalText').then(($text) => {
            this.account.accountNumber = 
                $text.text().match(/\d*-\d/)[0] 
        })

        cy.get("#btnCloseModal").click({force: true })
        return this.account
    }
 
}