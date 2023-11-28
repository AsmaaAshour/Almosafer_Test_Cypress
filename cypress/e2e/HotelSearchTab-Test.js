///<reference types="Cypress"/>

describe("Almosafer", () => {
  it("Hotel search tab is not selected by defult", () => {
    cy.visit("https://www.almosafer.com/en");
    cy.get(".cta__saudi").click();
    cy.get("#uncontrolled-tab-example-tab-hotels").should("not.have.focus");
  });

  it.only("Switch to  hotel search tab", () => {
    let website = [
      "https://www.almosafer.com/en",
      "https://www.almosafer.com/ar",
    ];
    let randomIndexWebsite = Math.floor(Math.random() * website.length);

    let placesInEnglish = ["Dubai", "Jeddah", "Riyadh"];
    let placesInArabic = ["دبي", "جدّة"];
    let randomIndexPlacesInEnglish = Math.floor(
      Math.random() * placesInEnglish.length
    );
    let randomIndexPlacesInArabic = Math.floor(
      Math.random() * placesInArabic.length
    );

    let room = ["A", "B"];
    let randomIndexRoom = Math.floor(Math.random() * room.length);

    cy.visit(website[randomIndexWebsite]);
    cy.get(".cta__saudi").click();

    cy.url().then((url) => {
      if (url.includes("en")) {
        cy.get("#uncontrolled-tab-example-tab-hotels").click();
        cy.get('[data-testid="AutoCompleteInput"]').type(
          placesInEnglish[randomIndexPlacesInEnglish]
        );
        cy.get('[data-testid="AutoCompleteResultsList"]').should("be.visible");
        cy.get('[data-testid="AutoCompleteResultItem0"]').click();
        cy.get(
          '[data-testid="HotelSearchBox__ReservationSelect_Select"]'
        ).select(room[randomIndexRoom]);
        cy.get('[data-testid="HotelSearchBox__SearchButton"]').click();
        cy.wait(10000);
        cy.get('[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]').click();
        cy.get('[data-testid="HotelSearchResult__resultsFoundCount"]').should(
          "contain",
          "found"
        );
      } else {
        cy.get("#uncontrolled-tab-example-tab-hotels").click();
        cy.get('[data-testid="AutoCompleteInput"]').type(
          placesInArabic[randomIndexPlacesInArabic]
        );
        cy.get('[data-testid="AutoCompleteResultsList"]').should("be.visible");
        cy.get('[data-testid="AutoCompleteResultItem0"]').click();
        cy.get(
          '[data-testid="HotelSearchBox__ReservationSelect_Select"]'
        ).select(room[randomIndexRoom]);
        cy.get('[data-testid="HotelSearchBox__SearchButton"]').click();
        cy.wait(10000);
        cy.get('[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]').click();
        cy.get('[data-testid="HotelSearchResult__resultsFoundCount"]').should(
          "contain",
          "وجدنا"
        );
      }
    });
  });
});
