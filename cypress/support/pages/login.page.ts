import { Account } from "../interfaces/account"
import { HomePage } from "./home.page"

export class LoginPage {

    emailLogin: string = '.card__login [name="email"]'
    passwordLogin: string = '.card__login [name="password"]'
    loginButton: string = '.login__buttons [type="submit"]'

    registerButton: string = '.login__buttons [type="button"]'
    emailLoginRegister: string = '.card__register [name="email"]'
    nameRegister: string = '.card__register [name="name"]'
    passwordRegister: string = '.card__register [name="password"]'
    passwordConfirmRegister: string = '.card__register [name="passwordConfirmation"]'
    buttonRegister: string = '.card__register [type="submit"]'

    toggleBalance: string = '#toggleAddBalance'

    modalText: string = '#modalText'
    buttonConfirmation: string = '#btnCloseModal'

    login = (email: string, password: string): LoginPage => {
        cy.fillField(this.emailLogin, email)
            .fillField(this.passwordLogin, password)
            .get(this.loginButton).click()
        return this;
    }

    clickButtonRegister = (): LoginPage => {
        cy.get(this.registerButton).click()
        return this
    }

    register = (email: string, name: string,
        password: string, passwordConfirm: string,
        withBalance: boolean): LoginPage => {
        cy.fillField(this.emailLoginRegister, email)
            .fillField(this.nameRegister, name)
            .fillField(this.passwordRegister, password)
            .fillField(this.passwordConfirmRegister, passwordConfirm)

        if (withBalance) this.clickToggle()
            .get(this.buttonRegister)
            .click({ force: true })
        
        cy.get(this.buttonConfirmation)
            .click({ force: true }).then(() =>{})
        return this
    }

    clickToggle = (): Cypress.Chainable<JQuery<HTMLElement>> => {

        return cy.get(this.toggleBalance).parent().then(($element) => {
            if ($element.attr('class').match(/hsmFIT/) == null) {
                cy.get(this.toggleBalance).click({ force: true })
            }
        })
    }

}