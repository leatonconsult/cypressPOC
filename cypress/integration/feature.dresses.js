import '../support/search.js'
import '../support/productDetails/dresses.js'

describe('Dresses', () => {
	  it('Add to Cart', () => {
		  	cy.fixture('dresses/summerDresses').then((d) => {
		  		cy.search(d.printedChiffonDress.name)
		  		cy.selectSearchResult(d.printedChiffonDress.name)
		  		cy.checkDressDetails(d.printedChiffonDress)
		  	})
	  })
})