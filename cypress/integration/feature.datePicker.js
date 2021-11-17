import { getDate } from "../support/utils";
import { getDate2Years } from "../support/utils";

describe("datePicker", () => {
  it("Type Date", () => {
      cy.log(getDate());
      cy.get('[id=search_query_top]').type(getDate())
      cy.get('[name=submit_search]').click()
      cy.get('[class="alert alert-warning"]').should('include.text', getDate())
  });
});