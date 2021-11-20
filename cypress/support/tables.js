/**
 * Useful functions to handle tables and data within
 */

/**
 * @param fixt - fixture to pass into function
 * check the data from within the fixture is present within table
 */
Cypress.Commands.add('verifyTableContent', (fixt) => {
	cy.fixture(fixt).then((fx)  => {
		cy.get('[id=table1]')
		.contains('td', fx.automationTool)
		//.parent('tr')
		//.children('td')
		.siblings() 			//siblings will exclude the item found above. Using .parent .children will get all
		.text()
		//.should('include', fx.automationTool)
		.should('include', fx.type)
	})
})

/**
 * @param searchStr
 * searches entire table to check searchStr is present
 */
Cypress.Commands.add('tableTextPresent', (searchStr) => {
	cy.get('[id=table1]').contains('td', searchStr)
})


/**
 * @param searchStr
 * @returns finds and returns entire row which contains searchStr
 */
function getRow(table, searchStr) {
	const rowData = cy.get(table)
	.contains('td', searchStr)
	.parent('tr')
	.children('td')
	//.text()	// if included, on return, would only return the actual data from the row, rather than locator
	return rowData;
} export { getRow };