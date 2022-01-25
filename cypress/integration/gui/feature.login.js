import '../../support/login.js'

describe('Login', () => {
  it('Authentication failed', () => {
	  cy.visit(Cypress.env('automation_practice'))
	  cy.log(cy.get('[class=login]').text())
	  cy.login('admin')
	  cy.get('[class="alert alert-danger"]').should('include.text', 'Authentication failed')  
	  })
})

describe('Login', () => {
  it('Invalid email', () => {
	  cy.visit(Cypress.env('automation_practice'))
	  cy.login('invalidEmail')
	  cy.get('[class="alert alert-danger"]').should('include.text', 'Invalid email address')
	  })
})