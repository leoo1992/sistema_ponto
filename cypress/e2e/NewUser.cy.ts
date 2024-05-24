describe('Register new user', () => {

  it('create new user', () => {
    // cy.visit(Cypress.env("VITE_REACT_APP_URL_GERAL_TEST")).should("exist");
    cy.wait(500);
    cy.visit('/');
    // cy.request(Cypress.env("VITE_REACT_APP_URL_GERAL_TEST")).its("status").should("eq", 200);
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
    cy.wait(3000);
    //open register page
    cy.visit('/register-update-user');

    cy.get('.flex-col > :nth-child(1) > :nth-child(2) > .input').type('Leonardo');

    cy.get(':nth-child(2) > :nth-child(2) > .input').type('LeonardoTest@test.com');

    cy.get(':nth-child(1) > .form-group > :nth-child(2) > .input').type('4899999999');

    cy.get(':nth-child(3) > :nth-child(2) > .form-group > :nth-child(2) > .input').type('68773117013');

    cy.get(':nth-child(4) > :nth-child(1) > .form-group > :nth-child(2) > .input-md').select(2);

    cy.get(':nth-child(4) > :nth-child(1) > .form-group > :nth-child(2) > .input-md').select(2);
    cy.get(':nth-child(4) > :nth-child(2) > .form-group > :nth-child(2) > .input-md').select(2);

    cy.get(':nth-child(5) > :nth-child(1) > .form-group > :nth-child(2) > .input-md').select(2);

    cy.get(':nth-child(5) > :nth-child(2) > .form-group > :nth-child(2) > .input').type('12345')

  })
})