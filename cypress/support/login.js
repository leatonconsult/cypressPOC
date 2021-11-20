/**
 * Login and logout functions
 */

/**
 * @param user - pass in fixture file for user (filename)
 * logs in the user based on fixture data
 */
Cypress.Commands.add('login', (user) => { 
	cy.get('[class=login]').click()
	cy.fixture('users/' + user).then((u)  => {
		cy.get('[id=email]').type(u.username)
		cy.get('[id=passwd]').type(u.password,{log: false})
			})
	cy.get('[id=SubmitLogin]').click()
})

/**
 * logs user out
 */
Cypress.Commands.add('logout', () => { 
	cy.get('[class=logout]').click()
})