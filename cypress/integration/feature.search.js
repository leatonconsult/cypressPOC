// google.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import '../support/search'

describe('Search', () => {
  it('Expect no results', () => {
	  cy.search('Mens Shirt')
	  cy.contains('0 results have been found')
  })
})