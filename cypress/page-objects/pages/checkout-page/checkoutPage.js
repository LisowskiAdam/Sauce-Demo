import BasePage from '../../basePage'
import Navbar from '../../components/Navbar'
import mainPageCopy from '../main-page/mainPageCopy'
import MainPageSelectors from '../main-page/mainPageSelectors'
import CheckoutPageSelectors from './checkoutPageSelectors'

class CheckoutPage extends BasePage {
    constructor() {
        super()
    }
    checkCartVisibility() {
        cy.isVisible(CheckoutPageSelectors.cart_list)
        Navbar.verifyPageTitle("YOUR CART")
        cy.get(MainPageSelectors.remove_sauce_labs_onesie).click()
        cy.get(CheckoutPageSelectors.cart_list).children('.cart_item').should('have.length', '3')
    }
    fillCheckoutForm() {
        cy.get(CheckoutPageSelectors.first_name).type('QA First Name')
        cy.get(CheckoutPageSelectors.last_name).type('QA Last Name')
        cy.get(CheckoutPageSelectors.zip_postal_code).type('12345')
    }
    verifyCheckoutStepTwo() {
        cy.isVisible(CheckoutPageSelectors.cart_list)
        cy.get(CheckoutPageSelectors.backpack_item_name).contains(mainPageCopy.sauce_labs_backpack_inventory_item_name)
        cy.get(CheckoutPageSelectors.backpack_item_desc).contains(mainPageCopy.sauce_labs_backpack_inventory_item_desc)
        cy.get(CheckoutPageSelectors.backpack_item_price).contains(mainPageCopy.sauce_labs_backpack_inventory_item_price)
        cy.get(CheckoutPageSelectors.bolt_tshirt_item_name).contains(mainPageCopy.sauce_labs_bolt_t_shirt_inventory_item_name)
        cy.get(CheckoutPageSelectors.bolt_tshirt_item_desc).contains(mainPageCopy.sauce_labs_bolt_t_shirt_inventory_item_desc)
        cy.get(CheckoutPageSelectors.bolt_tshirt_item_price).contains(mainPageCopy.sauce_labs_bolt_t_shirt_inventory_item_price)
        cy.get(CheckoutPageSelectors.fleece_jacket_item_name).contains(mainPageCopy.sauce_labs_fleece_jacket_inventory_item_name)
        cy.get(CheckoutPageSelectors.fleece_jacket_item_desc).contains(mainPageCopy.sauce_labs_fleece_jacket_inventory_item_desc)
        cy.get(CheckoutPageSelectors.fleece_jacket_item_price).contains(mainPageCopy.sauce_labs_fleece_jacket_inventory_item_price)
        cy.get(CheckoutPageSelectors.payment_info).contains('SauceCard #31337')
        cy.get(CheckoutPageSelectors.shipping_info).contains('FREE PONY EXPRESS DELIVERY!')
        cy.get(CheckoutPageSelectors.summary_subtotal_label).contains('$95.97')
        cy.get(CheckoutPageSelectors.summary_tax_label).contains('$7.68')
        cy.get(CheckoutPageSelectors.summary_total_label).contains('$103.65')
    }
    verifyOrderPlacement() {
        cy.isVisible(CheckoutPageSelectors.checkout_complete_container)
        cy.contains('THANK YOU FOR YOUR ORDER')
        cy.contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        cy.get(CheckoutPageSelectors.back_home_button).click()
        cy.url().should('include', 'inventory.html')
    }
    clickCheckoutButton() {
        cy.get(CheckoutPageSelectors.checkout_button).click()
    }
    cickContinueShoppingButton() {
        cy.get(CheckoutPageSelectors.continue_shopping_button).click()
    }
    clickCancelButton() {
        cy.get(CheckoutPageSelectors.cancel_button).click()
    }
    clickContinueButton() {
        cy.get(CheckoutPageSelectors.continue_button).click()
    }
    clickFinishButton() {
        cy.get(CheckoutPageSelectors.finish_button).click()
    }
    checkErrorMessageVisibility() {
        cy.isVisible(CheckoutPageSelectors.error_message).contains('Error: First Name is required')
    }
}

export const checkoutPage = new CheckoutPage()