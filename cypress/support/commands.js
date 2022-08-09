Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', selector => {
    cy.get(selector).should('not.exist')
})

Cypress.Commands.add('clickSignInButton', selector => {
    cy.get(selector).click()
})

Cypress.Commands.add('login', (username = Cypress.env('username'), password = Cypress.env('password')) => {
    cy.get('.login_wrapper').should('be.visible')
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
})