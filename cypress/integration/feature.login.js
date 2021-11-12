import '../support/login'

describe('Login', () => {
  it('Authentication failed', () => {
	  cy.login('admin')
	  cy.contains('Authentication failed')
	  })
})

describe('Login', () => {
  it('Invalid email', () => {
	  cy.login('invalidEmail')
	  cy.contains('Invalid email address')
	  })
})