/**
 * Searching functions 
 */

/**
 * @param searchStr - string to be used for search
 * Uses search bar to search for searchStr
 */
Cypress.Commands.add('search', (searchStr) => { 
	  cy.get('[id=search_query_top]').type(searchStr)
	  cy.get('[name=submit_search]').click()
})