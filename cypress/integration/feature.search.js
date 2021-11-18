// google.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import '../support/search.js'
import '../support/utils.js'
import { getDate } from "../support/utils";

describe('Search', () => {
  it('Expect no results', () => {
	  //var searchStr = 'Mens Shirt'
	  const date = getDate(1094);
	  cy.search(date)
	  cy.get('[class="alert alert-warning"]').should('include.text', date)
	  cy.contains('0 results have been found')
  })
})