// import { getDate } from "../support/date";

describe("todos", () => {
  it("GET - to do items", () => {
	  cy.request('/todos/').as('todoRequest');
	  cy.get('@todoRequest').then(todos => {
		  expect(todos.status).to.eq(200);
		  assert.isArray(todos.body, 'Todos Response is an array')
	  });
  });
});