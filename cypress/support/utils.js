Cypress.Commands.add('setStartDate', () => { 
	cy.get('[id=startDateField]').type(getDate2Years());
})

function getDate() {
	const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
	let today = new Date(),
		dd = today.getDate(),
		mmm = months[today.getMonth()],					// mmm using const months above (0 index)
		//mm = today.getMonth()+1,						// mm getMonth()+1 returns 07 or 11 (+1 for 0 index)
		yyyy = today.getFullYear()
	var date = (dd + "-" + mmm + "-" + yyyy)
	return date;
} export { getDate }; 

function getDate2Years() {
	const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
	let today = new Date(),
		dd = today.getDate()-1,
		mmm = months[today.getMonth()],					// mmm using const months above (0 index)
		//mm = today.getMonth()+1,						// mm getMonth()+1 returns 07 or 11 (+1 for 0 index)
		yyyy = today.getFullYear()+2
	var date2Years = (dd + "-" + mmm + "-" + yyyy)
	return date2Years;
} export { getDate2Years }; 