import '../support/tables.js'
import { getRow } from "../support/tables";

describe('Tables', () => {
    it('Do Iteration', () => {
    	// do some stuff first adding data via fixture
    	cy.verifyTableContent('tableData')		// passing in fixture (test data)
    })
})