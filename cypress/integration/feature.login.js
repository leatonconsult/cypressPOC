import '../support/login'

describe('Login', () => {
  it('Authentication failed', () => {
	  cy.login('admin')
	  cy.get('[class="alert alert-danger"]').should('include.text', 'Authentication failed')
	  })
})

describe('Login', () => {
  it('Invalid email', () => {
	  cy.login('invalidEmail')
	  cy.get('[class="alert alert-danger"]').should('include.text', 'Invalid email address')
	  })
})