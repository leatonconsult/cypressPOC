import { getRow } from "../../support/tables";
import { getSpendMonth} from "../../support/date"; 

// Find drop down item by text 
describe('popupLOV', () => {
    it('Handling search, find text and click', () => {
    	cy.visit(Cypress.env('popupLOV'))
    	
    	// Click box
    	cy.get('[id="P2_VACCINE_CENTER"]').click()
    	
    	// Get text field and type string
    	cy.get('[class="a-PopupLOV-search apex-item-text"]').type('Ville de')
    
    	// Click search
    	cy.get('[class="a-Button a-PopupLOV-doSearch"]').click()
    	
    	// Find result we want within drop down
    	cy.get('[class="a-PopupLOV-results a-TMV"]').contains('CENTRE DE VACCINATION - VILLE DE LIMOGES').click()
    	
    })
})






/**
 * 


// Below will search and check expected content is in the table 
describe('popupLOV', () => {
    it('Handling search, simple check', () => {
    	cy.visit(Cypress.env('popupLOV'))
    	cy.get('[id=P2_MULTI_COLUMN_2').click()
    	cy.get('[class="a-PopupLOV-search apex-item-text"]').type('77340')
    	// Click Search Button if there is one 
    	cy.get('[class="a-GV-bdy"').should('include.text', ' Ville de Pontault Combault')
    	// Click row that contains our result
    	cy.get('[class="a-GV-bdy"]').contains('tr', '77340').click()
    })
})

// Below will find the result within table, get the row and then check the row includes expected data
describe('popupLOV', () => {
    it('Handling search, content check', () => {
    	cy.visit(Cypress.env('popupLOV'))
    	
    	// Could put below 3 lines into function
    	cy.get('[id=P2_MULTI_COLUMN_2').click()
    	cy.get('[class="a-PopupLOV-search apex-item-text"]').type('77340')
    	// cy.get('[id=searchBtn]').click()   Click Search Button if there is one 
    	
    	// Get row data - This would go in a separate function and pass in table ID and string to find row
    	// eg. function getRow(table, searchStr) { ... }
    	const tableData = cy.get('[class="a-GV-bdy"]')
    	.contains('tr', 'Ville de Pontault Combault')
    	.children('td')
    	.text()
    	
    	// Checking content of row could also be put into function or combined with the above to be a get and verify
    	.should('include', 'Ville de Pontault Combault')
    	.should('include', '77340')
    	
    	// Click row that contains our result
    	cy.get('[class="a-GV-bdy"]').contains('tr', '77340').click()
    })
})

// Below searches, gets the row and checks the data is also in the correct columns
describe('popupLOV', () => {
    it('Handling search, comprehensive content check', () => {
    	
    	// Set Array of expected data - Should be data within a Fixture or JSON object etc
    	const expectedData = ['Ville de Pontault Combault', '129', 'Rue du Plateau', '77340', 'Pontault-Combault']
    	
    	cy.visit(Cypress.env('popupLOV'))
    	
    	// Could put below 3 lines into function which searches 
    	cy.get('[id=P2_MULTI_COLUMN_2').click()
    	cy.get('[class="a-PopupLOV-search apex-item-text"]').type('77340')
    	// cy.get('[id=searchBtn]').click()   Click Search Button if there is one 

    	
    	// Get row data - This would go in a separate function and pass in table ID and string to find row
    	// eg. function getRow(table, searchStr) { ... }
    	const tableData = cy.get('[class="a-GV-bdy"]')
    	.contains('tr', 'Ville de Pontault Combault')
    	.children('td')
    	.text()
    	// I haven't found a way to search down columns yet, headers seem to be separate from table. 
    	// Our Dev's might work differently with their column headings... as a work around... 
    	// The below checks each returned item against our Array defined above in order we expect in table L to R
    	.each(($item, i) => {
    		expect($item).to.equal(expectedData[i]);
    	})
    	
    	// Click row that contains our result
    	cy.get('[class="a-GV-bdy"]').contains('tr', 'Ville de Pontault Combault').click()
    })
})
**/