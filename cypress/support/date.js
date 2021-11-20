require('datejs');

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
		.addDays(nDays)
		.toString("dd-MMM-yyyy")
	} else { 
		throw new Error('Unable to get date')
	}
} export { getDate };