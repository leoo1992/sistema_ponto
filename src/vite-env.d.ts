import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { join } from "path";
import { config } from "dotenv";

config({ path: join(__dirname, ".env") });

export default defineConfig({
  plugins: [react()],
});

/// <reference types="vite" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_REACT_APP_LOGIN_URL: string;
  VITE_REACT_APP_DISABLE_USER_URL: string;
  VITE_REACT_APP_EDIT_USER_URL: string;
  VITE_REACT_APP_USER_LIST_URL: string;
  VITE_REACT_APP_DELETE_USER_URL: string;
  VITE_REACT_APP_NEW_USER_URL: string;
  VITE_REACT_APP_EMAIL_TEST: string;
  VITE_REACT_APP_PASS_TEST: string;
  VITE_REACT_APP_URL_GERAL_TEST: string;
  VITE_REACT_APP_URL_HOME_TEST: string;
}
