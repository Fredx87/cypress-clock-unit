/// <reference types="cypress" />

describe("Clock integration test", () => {
  it("should change default date time", () => {
    const now = new Date(Date.UTC(2017, 2, 14)).getTime();
    cy.clock(now);
    cy.visit("https://example.cypress.io/commands/spies-stubs-clocks");
    cy.get("#clock-div").click().should("have.text", "1489449600");
  });
});
