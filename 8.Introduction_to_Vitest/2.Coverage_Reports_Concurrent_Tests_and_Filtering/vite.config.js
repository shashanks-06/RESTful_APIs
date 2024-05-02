import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  define: {
    "import.meta.vitest": undefined, //to prevent tests file for not being loaded in build (production)
  },

  test: {
    includeSource: ["**/*.{js,ts}"], // to test functions in actual code file itself, rather than creating new file as newFile.test.js

    globals: true, // to use methods of vitest globally without importing them from library
  },
});
