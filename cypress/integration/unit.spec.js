/// <reference types="cypress" />

import getTime from "../../src/date";

describe("Clock unit test", () => {
  it("should change default date time", () => {
    const now = new Date(Date.UTC(2017, 2, 14)).getTime();
    cy.clock(now);
    const result = getTime();
    expect(result).equal(1489449600);
  });

  it("should change default date time", () => {
    const now = new Date(Date.UTC(2017, 2, 14)).getTime();
    cy.clock(now);
    cy.wrap(getTime()).should(res => { expect(res).eq(1489449600) });
  });
});
