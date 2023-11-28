///<reference types="Cypress"/>

describe("Almosafeer", () => {
  it("Assertion Defult Currency is SAR", () => {
    cy.visit("https://www.almosafer.com/en");
    cy.get(".cta__saudi").click();
    cy.get('[data-testid="Header__CurrencySelector"]')
      .invoke("text")
      .should("include", "SAR");
  });
});
