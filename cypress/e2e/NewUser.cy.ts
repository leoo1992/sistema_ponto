describe('Register new user', () => {
  it('create new user', () => {
    cy.visit(Cypress.env("VITE_REACT_APP_URL_GERAL_TEST")).should("exist");
    cy.request(Cypress.env("VITE_REACT_APP_URL_GERAL_TEST")).its("status").should("eq", 200);
    cy.get('[data-testid="email"]').should("exist");
    cy.get('[data-testid="pass"]').should("exist");
    cy.get('[data-testid="login-btn"]').should("exist");
    cy.get('[data-testid="loss-pass"]').should("exist");

    //types
    cy.get('[data-testid="email"]').type(
      Cypress.env("VITE_REACT_APP_EMAIL_TEST"),
    );
    cy.get('[data-testid="pass"]').type(
      Cypress.env("VITE_REACT_APP_PASS_TEST"),
    );

    //click
    cy.get('[data-testid="login-btn"]').contains("Entrar").click();

    //change page
    cy.url().should("eq", Cypress.env("VITE_REACT_APP_URL_HOME_TEST"));

    //inpect token
    cy.getCookie("Bearer").should("exist");
    cy.getCookie("AuthToken").should("exist");

    //open menu
    cy.get('[data-testid="left-menu-btn"]').should("exist").click();
    cy.get('[data-testid="left-menu-btn"]').click();

    //click link navigation
    cy.get('[data-testid="link-add-user"]').should("exist").click();
    cy.get('[data-testid="link-add-user"]').click();



  })
})