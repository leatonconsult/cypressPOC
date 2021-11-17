// google.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import '../support/search.js'
import '../support/utils.js'

describe('Search', () => {
  it('Expect no results', () => {
	  var searchStr = 'Mens Shirt'
	  cy.search(searchStr)
	  cy.get('[class="alert alert-warning"]').should('include.text', searchStr)
	  cy.contains('0 results have been found')
  })
})