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

/**
 * @param searchStr - string to be used to select search result
 * Finds and selects desired item from search results
 */
Cypress.Commands.add('selectSearchResult', (searchStr) => {
		cy.get('[class="page-heading  product-listing"]').contains(searchStr)
  		cy.get('[class="product_list grid row"]').contains(searchStr).click()
})