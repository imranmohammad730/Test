describe('Amazon Shopping Test', function() {
    it('Adds a gaming keyboard to the cart', function() {
        cy.visit('http://www.amazon.com')

        cy.get('#twotabsearchtextbox').type('gaming keyboards{enter}')

        cy.get('.s-result-item', { timeout: 10000 }).eq(1).click()
        //cy.get(':nth-child(2) > .s-suggestion-container > .s-suggestion').click()
        cy.get('[data-asin="B0BM2YKK7F"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium').click()

        cy.get('#add-to-cart-button').click()

        cy.get('#nav-cart').click()

        cy.get('.a-truncate-cut', { timeout: 10000 }).should('contain', 'Gaming Keyboard')

        cy.get('.sc-action-quantity input').should('have.value', '1')

        cy.get('#sc-buy-box-gift-checkbox').check().should('be.checked')
    })
})
