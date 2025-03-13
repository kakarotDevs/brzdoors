import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Allows connection from local network
    port: 5137,
  },
  build: {
    outDir: "build", // This ensures that the build output goes to the 'build' folder
  },
  base: "/brzdoors/", // GitHub Pages URL path
});
