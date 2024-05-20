describe("Test Login", () => {
  it("E2E Test - if success login", () => {
    //components exist validations
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
  });





  it("API Test - if success login", () => {
    //env vars
    const LoginURL = Cypress.env("VITE_REACT_APP_LOGIN_URL");
    const loginData = {
      email: Cypress.env("VITE_REACT_APP_EMAIL_TEST"),
      password: Cypress.env("VITE_REACT_APP_PASS_TEST"),
    };

    //url validation and data.envs
    expect(LoginURL).to.not.be.undefined;
    expect(loginData).to.not.be.undefined;

    //clear cookie
    cy.clearCookie("AuthToken");

    //request
    cy.request({
      method: "POST",
      url: LoginURL,
      headers: {
        "Content-Type": "application/json",
      },
      body: loginData,
    }).then((response) => {
      //status response
      expect(response.status).to.eq(200);
      const token = response.body.token;

      //token response
      expect(token).to.exist;

      //set auth token in bearer
      cy.setCookie("Bearer", token);

      //check bearer token
      cy.getCookie("Bearer").should("have.property", "value", token);
    });
  });
});
