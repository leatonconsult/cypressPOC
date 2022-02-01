// import { getDate } from "../support/date";

let ticket
describe("auth", () => {
  it("get auth ticket", () => {
	  cy.request({
	        method: 'POST',
	        url: Cypress.env('api_identity_url'), //get from cypress.env.json
	        form: true, //sets to application/x-www-form-urlencoded
	        username: Cypress.env('api_identity_username'),
	        password: Cypress.env('api_identity_password')
	  	})
	        .its('body')
	        .then((response) => {
	            ticket = response
	            window.localStorage.setItem('ticket', JSON.stringify(ticket))
	            cy.log(identity)
	    })
  	})
})