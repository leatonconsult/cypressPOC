require('datejs');

/**
 * sets end date to 2 years time from today using getDate() function
 */
Cypress.Commands.add('setEndDate', () => { 
	cy.get('[id=endDateField]').type(todaysDate2Years());
})


/**
 *  @param nDays number of days to add (or subtract) from date eg 5 or -10
 *  null == today
 *  get date using datejs as dd-MMM-yyyy (18-Nov-2021)
 */
function getDate(nDays) { 
	if (nDays == null) {
		return Date.today().toString("dd-MMM-yyyy")
	} else if (Number.isInteger(nDays)) {
		return Date.today()
		.add(nDays).days()
		.toString("dd-MMM-yyyy")
	} else { 
		throw new Error('Unable to get date')
	}
} export { getDate };


/**
 * get date using datejs +2 years as dd-MMM-yyyy (18-Nov-2021)
 */
function todaysDate2Years() { 
	const today = Date.today().add(2).years().toString("dd-MMM-yyyy")
	return today;
} export { todaysDate2Years };


/**
 * get date using datejs -1 day +3 yearsas dd-MMM-yyyy (18-Nov-2021)
 */
function todaysDate3Years() { 
	const today = Date.today()
		.add(-1).days()
		.add(3).years()
		.toString("dd-MMM-yyyy")
	return today;
} export { todaysDate3Years };