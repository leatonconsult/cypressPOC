import { getRow } from "../support/tables";
import { getSpendMonth} from "../support/date"; 

describe('Tables', () => {
    it('Do Iteration', () => {
    	// do some stuff 
    	const table = '[id=table1]';
    	//cy.verifyTableContent(table, 'tableData')		// passing in fixture (test data)
    	cy.log(getSpendMonth(5))
    })
})