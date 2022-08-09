import BasePage from '../../basePage'
import Navbar from '../../components/Navbar'
import LoginPageSelectors from './loginPageSelectors'
import MainPageSelectors from '../main-page/mainPageSelectors'

class LoginPage extends BasePage {
    constructor() {
        super()
    }
    login(username, password) {
        cy.login(username, password)
    }
    logout() {
        cy.get(MainPageSelectors.inventory_list).should('be.visible')
        cy.url().should('include', 'inventory.html')
        Navbar.clickOnMenu()
        Navbar.verifyPageTitle("PRODUCTS")
        Navbar.clickOnLogoutLink()
        cy.url().should('not.include', 'inventory.html')
        cy.get('.login_wrapper').should('be.visible')
    }
    displayErrorMessage() {
        cy.isVisible(LoginPageSelectors.error_message)
        cy.get(LoginPageSelectors.error_message).contains('Epic sadface: Username and password do not match any user in this service')
    }
}

export const loginPage = new LoginPage()