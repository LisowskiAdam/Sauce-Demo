/// <reference types="cypress" />

import { mainPage } from "../page-objects/pages/main-page/mainPage"
import { loginPage } from "../page-objects/pages/login-page/loginPage"
import Navbar from "../page-objects/components/Navbar"
import { checkoutPage } from "../page-objects/pages/checkout-page/checkoutPage"

describe('Unsuccessfull Login Tests', () => {
    before(() => {
        loginPage.visitPage()
        loginPage.login()
    })
    it('Should add items to Cart and proceed through Checkout', () => {
        mainPage.verifyProductsInfo()
        mainPage.verifyFooter()
        mainPage.addItemToCart()
        Navbar.proceedToCart()
        checkoutPage.checkCartVisibility()
        mainPage.proceedThroughCheckout()
    })
})