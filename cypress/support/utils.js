Cypress.Command.add('setStartDate', () => { 
	cy.get('[id=startDateField]').type(getDate());
})

function getDate() {
	const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEV"];
	let today = new Date(),
		dd = today.getDate(),
		mmm = months[today.getMonth()],					// mmm using const months above (0 index)
		//mm = today.getMonth()+1,						// mm getMonth()+1 returns 07 or 11 (+1 for 0 index)
		yyyy = today.getFullYear()
	var date = (dd + "-" + mmm + "-" + yyyy)
	return date;
} export { getDate }; 