import '../support/login'

var users = "users.json"

describe('Login', () => {
  it('Authentication failed', () => {
	  cy.fixture(users).then((user)  => {
			cy.login(user.valid.username, user.valid.password)
	  		})
	  cy.contains('Authentication failed')
	  })
})

describe('Login', () => {
  it('Invalid email', () => {
	  cy.fixture(users).then((user)  => {
			cy.login(user.invalidEmail.username, user.invalidEmail.password)
	  		})
	  cy.contains('Invalid email address')
	  })
})