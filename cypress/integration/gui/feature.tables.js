import '../../support/tables.js'
import { getRow } from "../../support/tables";

describe('Tables', () => {
    it('Do Iteration', () => {
    	cy.visit(Cypress.env('practice_tables'))
    	// do some stuff first adding data via fixture
    	const table = '[id=table1]';
    	cy.verifyTableContent(table, 'tableData')		// passing in fixture (test data)
    })
})