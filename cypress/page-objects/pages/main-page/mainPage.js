import BasePage from '../../basePage'
import Navbar from '../../components/Navbar'
import NavbarSelectors from '../../components/NavbarSelectors'
import { checkoutPage } from '../checkout-page/checkoutPage'
import MainPageSelectors from './mainPageSelectors'

class MainPage extends BasePage {
    constructor() {
        super()
    }
    addItemToCart() {
        cy.get(MainPageSelectors.sauce_labs_backpack).click()
        cy.get(MainPageSelectors.sauce_labs_bike_light).click()
        cy.get(MainPageSelectors.sauce_labs_bolt_t_shirt).click()
        cy.get(MainPageSelectors.sauce_labs_fleece_jacket).click()
        cy.get(MainPageSelectors.sauce_labs_onesie).click()
        cy.get(MainPageSelectors.sauce_labs_red_thirt).click()
        cy.get(MainPageSelectors.remove_sauce_labs_bike_light).click()
        cy.get(MainPageSelectors.remove_sauce_labs_red_thirt).click()
        cy.get(NavbarSelectors.shopping_cart_badge).contains('4')
    }
    proceedThroughCheckout() {
        checkoutPage.cickContinueShoppingButton()
        Navbar.proceedToCart()
        checkoutPage.clickCheckoutButton()
        checkoutPage.clickCancelButton()
        checkoutPage.clickCheckoutButton()
        Navbar.verifyPageTitle("CHECKOUT: YOUR INFORMATION")
        checkoutPage.clickContinueButton()
        checkoutPage.checkErrorMessageVisibility()
        checkoutPage.fillCheckoutForm()
        checkoutPage.clickContinueButton()
        Navbar.verifyPageTitle("CHECKOUT: OVERVIEW")
        checkoutPage.verifyCheckoutStepTwo()
        checkoutPage.clickFinishButton()
        Navbar.verifyPageTitle("CHECKOUT: COMPLETE!")
        checkoutPage.verifyOrderPlacement()
    }
    verifyProductsInfo() {
        cy.get(MainPageSelectors.inventory_list).children().should('have.length', '6')
        
    }
    verifyFooter() {
        cy.get(MainPageSelectors.social_twitter).should('be.visible')
        cy.get(MainPageSelectors.social_facebook).should('be.visible')
        cy.get(MainPageSelectors.social_linkedin).should('be.visible')
        cy.get(MainPageSelectors.social_twitter).should('have.attr', 'href', 'https://twitter.com/saucelabs')
        cy.get(MainPageSelectors.social_facebook).should('have.attr', 'href', 'https://www.facebook.com/saucelabs')
        cy.get(MainPageSelectors.social_linkedin).should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/')
        cy.get(MainPageSelectors.footer_copy).contains('© 2022 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Polic')
    }
}

export const mainPage = new MainPage()