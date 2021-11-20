import { getRow } from "../../support/tables.js";

/**
 * @paran
 * 
 */
Cypress.Commands.add('checkDressDetails', (dressData) => {
	cy.get('[itemprop=name]').contains(dressData.name)
	cy.get('[id=product_condition').contains(dressData.condition)
	cy.get('[id=our_price_display]').contains(dressData.price)
	cy.get('[id=reduction_percent_display]').contains(dressData.discount)
	cy.log(getRow("[class=\"page-product-box\"]", "Compositions"))
	getRow("[class=\"page-product-box\"]", "Compositions").should('include.text', dressData.dataSheet.compositions)
	getRow("[class=\"page-product-box\"]", "Styles").should('include.text', dressData.dataSheet.styles)
	getRow("[class=\"page-product-box\"]", "Properties").should('include.text', dressData.dataSheet.properties)
})