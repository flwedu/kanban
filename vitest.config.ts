import react from "@vitejs/plugin-react";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    exclude: [...configDefaults.exclude],
    css: false,
    setupFiles: ["./src/__tests__/setup.ts"],
  },
});
