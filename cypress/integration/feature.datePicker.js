import '../support/utils'

describe('datePicker', () => {
  it('Type Date', () => {
	  var test = cy.setDate()
	  cy.log(JSON.stringify(test))
  })
})