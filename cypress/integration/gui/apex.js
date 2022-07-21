import { getRow } from "../../support/tables";

describe('APEX', () => {
    it('Interactive Grid', () => {
    	cy.visit(Cypress.env('popupLOV'))
    	// do some stuff first adding data via fixture

        cy.log('ENTER DATE');
        cy.get('[id="R6848412425353629802_ig_grid_vc_cur"]').click();
        cy.log('CLICK EDIT');
        cy.get('[id=R6848412425353629802_ig_toolbar_m1]').click({force:true})

        //cy.get('[id="C6848412868007629806|input"]')
        //.dblclick({force:true})
        //.type('06/06/2022{enter}');
        //cy.get('[data-action="save"]').click({force:true})
    })
})