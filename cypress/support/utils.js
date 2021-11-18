require('datejs');

/**
 * sets end date to 2 years time from today using getDate() function
 */
Cypress.Commands.add('setEndDate', () => { 
	cy.get('[id=endDateField]').type(todaysDate2Years());
})


/**
 * get date using datejs as dd-MMM-yyyy (18-Nov-2021)
 */
function todaysDate() { 
	const today = new Date().toString("dd-MMM-yyyy") 
	return today;
} export { todaysDate };


/**
 * get date using datejs as dd-MMM-yyyy (18-Nov-2021)
 */
function todaysDate2Years() { 
	const today = Date.today().add(2).years().toString("dd-MMM-yyyy")
	return today;
} export { todaysDate2Years };
