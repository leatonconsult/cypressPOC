// Login Commands

Cypress.Commands.add('login', (user, pass) => { 
	  cy.get('[class=login]').click()
	  cy.get('[id=email]').type(user)
	  cy.get('[id=passwd]').type(pass)
	  cy.get('[id=SubmitLogin]').click()
})