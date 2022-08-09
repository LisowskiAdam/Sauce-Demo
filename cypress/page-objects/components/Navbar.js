import MainPageSelectors from "../pages/main-page/mainPageSelectors"
import NavbarSelectors from "./NavbarSelectors"

export default class Navbar {
  static clickOnMenu() {
    cy.get(MainPageSelectors.burger_menu).click()
  }
  static clickOnAllItemsLink() {
    cy.get(MainPageSelectors.inventory_sidebar_link).click()
  }
  static clickOnAboutLink() {
    cy.get(MainPageSelectors.about_sidebar_link).click()
  }
  static clickOnLogoutLink() {
    cy.get(MainPageSelectors.logout_sidebar_link).click()
  }
  static clickOnResetAppStateLink() {
    cy.get(MainPageSelectors.reset_sidebar_link).click()
  }
  static proceedToCart() {
    cy.get(NavbarSelectors.shopping_cart).click()
  }
  static verifyPageTitle(pageTitle) {
    switch(pageTitle) {
      case "PRODUCTS":
        cy.url().should('include', 'inventory.html')
        break
      case "YOUR CART":
        cy.url().should('include', 'cart.html')
        break
      case "CHECKOUT: YOUR INFORMATION":
        cy.url().should('include', 'checkout-step-one')
        break
      case "CHECKOUT: OVERVIEW":
        cy.url().should('include', 'checkout-step-two')
        break
      case "CHECKOUT: COMPLETE!":
        cy.url().should('include', 'checkout-complete')
        break
    }
  }
}
