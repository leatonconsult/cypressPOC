
cypress.Commands.add('getAuthTicket', (user) => {
	let ticket
	cy.fixture('auth/users').then((u) => {
		cy.request({
	        method: 'POST',
	        url: Cypress.env('api_endpoint'), //get from cypress.env.json
	        form: true, //sets to application/x-www-form-urlencoded
	        username: ('${this.u.user.username}'),
	        password: ('${this.u.user.password}')
	  	})
	        .its('body')
	        .then((response) => {
	            ticket = window.localStorage.setItem('response', JSON.stringify(response))
	            return ticket
	    })
  	})
})