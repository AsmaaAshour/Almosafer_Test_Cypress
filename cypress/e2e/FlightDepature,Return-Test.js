///<reference types="Cypress"/>

describe("Almosafer", () => {
  it("Flight depature date is set to (today+1) & return date is set to (todat+2) by defult", () => {
    cy.visit("https://www.almosafer.com/en");
    cy.get(".cta__saudi").click();

    let currentDate = new Date();
    let today = currentDate.getDate();

    let expecteddepature = today + 1;
    let expectedreturn = today + 2;

    cy.get('[data-testid="FlightSearchBox__FromDateButton"]').should(
      "contain",
      expecteddepature
    );
    cy.get('[data-testid="FlightSearchBox__ToDateButton"]').should(
      "contain",
      expectedreturn
    );
  });
});
