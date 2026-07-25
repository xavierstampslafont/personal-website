import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
  base: "",
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "./src"),
    },
  },
})
