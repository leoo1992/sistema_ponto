import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  env: {
    VITE_REACT_APP_LOGIN_URL: process.env.VITE_REACT_APP_LOGIN_URL,
    VITE_REACT_APP_EMAIL_TEST: process.env.VITE_REACT_APP_EMAIL_TEST,
    VITE_REACT_APP_PASS_TEST: process.env.VITE_REACT_APP_PASS_TEST,
    VITE_REACT_APP_URL_GERAL_TEST: process.env.VITE_REACT_APP_URL_GERAL_TEST,
    VITE_REACT_APP_URL_HOME_TEST: process.env.VITE_REACT_APP_URL_HOME_TEST,

  },

  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
});
