import { Account } from "../interfaces/account"
import { HomePage } from "./home.page"


export class LoginPage {
    account: Account = {}
    
    emailLogin: string = '.card__login [name="email"]'
    passwordLogin: string = '.card__login [name="password"]'
    loginButton: string = '.login__buttons [type="submit"]'
    
    registerButton: string = '.login__buttons [type="button"]'
    emailLoginRegister: string = '.card__register [name="email"]'
    nameRegister: string = '.card__register [name="name"]'
    passwordRegister: string = '.card__register [name="password"]'
    passworConfirmRegister: string = '.card__register [name="passwordConfirmation"]'

    login = (email: string, password: string): LoginPage => {
        cy.get(this.emailLogin)
        .type(email)
        .get(this.passwordLogin)
        .type(password)
        .
        return this;
    }

}