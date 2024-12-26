/* eslint-disable no-undef */
describe('Home Page', () => {
    it('landed on home page', () => {
      cy.visit('/')
      cy.title().should('eq', 'WhatsApp Web Copy')
    })
})