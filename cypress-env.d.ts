declare namespace Cypress {
    interface Cypress {
      env: {
        VITE_REACT_APP_LOGIN_URL: string;
        VITE_REACT_APP_EMAIL_TEST: string;
        VITE_REACT_APP_PASS_TEST: string;
        VITE_REACT_APP_URL_GERAL_TEST: string;
        VITE_REACT_APP_URL_HOME_TEST: string;
      };
    }
  }
  
  declare const Cypress: Cypress.Cypress;
  