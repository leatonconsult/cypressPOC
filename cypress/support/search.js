// Search Commands

Cypress.Commands.add('search', (searchStr) => { 
	  cy.get('[id=search_query_top]').type(searchStr)
	  cy.get('[name=submit_search]').click()
})