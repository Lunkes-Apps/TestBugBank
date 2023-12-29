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

    toggleBalance: string = '#toggleAddBalance'


    login = (email: string, password: string): LoginPage => {
        cy.get(this.emailLogin)
        .type(email)
        .get(this.passwordLogin)
        .type(password)
        .get(this.loginButton).click()
        return this;
    }

    register(email: string, name: string, 
             password: string, passwordConfirm: string,
             withBalance: string): LoginPage{
        cy.get(this.emailLoginRegister)
        .type(email)
        .get(this.nameRegister)
        .type(name)
        .get(this.passwordRegister)
        .type(password)
        .get(this.passworConfirmRegister)
        .type(passwordConfirm)

        if()

    }

    isToggleTrue = (): boolean =>{
        cy.get(this.toggleBalance).parent().then(($element) =>{
            $element.
            return true;
        })
    }

}