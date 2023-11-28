///<reference types="Cypress"/>

describe("Almosaferr", () => {
  it("Assersion Defult language is En", () => {
    cy.visit("https://www.almosafer.com/en");
    cy.get(".cta__saudi").click();
    cy.url("https://www.almosafer.com/en").should("include", "en");
    cy.get('[data-testid="Header__LanguageSwitch"]').should(
      "not.contain",
      "English"
    );
  });

  it.only("random method to change language", () => {
    let website = [
      "https://www.almosafer.com/en",
      "https://www.almosafer.com/ar",
    ];
    let randomIndexwebsite = Math.floor(Math.random() * website.length);

    cy.visit(website[randomIndexwebsite]);
    cy.get(".cta__saudi").click();

    cy.url().then((url) => {
      if (url.includes("ar")) {
        cy.get('[data-testid="Header__LanguageSwitch"]').should(
          "contain",
          "English"
        );
      } else {
        cy.get('[data-testid="Header__LanguageSwitch"]').should(
          "contain",
          "العربية"
        );
      }
    });
  });
});
