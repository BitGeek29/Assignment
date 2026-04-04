const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react-swc");

module.exports = defineConfig({
  plugins: [react()],
  server:{
    open: true,
    host: true,
    port: 3000,
    strictPort: true,
  }
});
