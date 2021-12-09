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

/**
 * gets array months based on this month - 11
 * @param m - month to pass in
 * @returns array of months positioned from this month - 11
 */
function getSpendMonth(m) {
	let i = 0
	var mon = []
	while (i > -12) {
		mon.push(Date.today().addMonths(i).toString("MMM-yyyy").toUpperCase())
		i--
	}
	var monthYr = mon[m]
	return monthYr
} export { getSpendMonth};