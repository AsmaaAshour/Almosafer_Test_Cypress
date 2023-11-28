///<reference types="Cypress"/>

describe("Almosafer", () => {
  it("verify qitaf logo is displayed in footer", () => {
    cy.visit("https://www.almosafer.com/en");
    cy.get(".cta__saudi").click();
    cy.get("svg").should("be.visible");
  });
});
