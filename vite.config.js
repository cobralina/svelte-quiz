import { defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { version } from "./package.json";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  let distribution_folder = `${env.VITE_APP_DISTRIBUTION_FOLDER}`;
  let public_folder = `${env.VITE_APP_BASE_URL}`;
  let souremap = false;
  return defineConfig({
    plugins: [
      svelte(),
      {
      name: "generate-index-html",
      apply: "build",
      generateBundle(_, bundle) {
        const htmlContent = `
        <!-- START literaturquizapp -->
        <link rel="stylesheet" href="${public_folder}/css/style.css" />
        <div id="literaturquizapp"></div>
        <script src="${public_folder}/js/app.umd.js"></script>
        <script>
          function loadMyApp() {
            if (typeof Litquiz !== "undefined") {
              Litquiz.mountApp("#literaturquizapp");
            } else {
              const appElement = document.getElementById("literaturquizapp");
              if (!appElement) {
                console.error('Element with id "app" not found.');
                return;
              }
              const script = document.createElement("script");
              script.src = "${public_folder}/js/app.umd.js";
              script.onload = () => Litquiz.mountApp("#literaturquizapp");
              appElement.parentNode.insertBefore(script, appElement.nextSibling);
            }
          }
          loadMyApp();
        </script>
        <!-- END -->
        `;
        this.emitFile({
          type: "asset",
          fileName: "polopoly.html",
          source: htmlContent.trim(),
        });
      },
    },],
    base: public_folder,
    build: {
      sourcemap: souremap,
      lib: {
        entry: './src/main.js', // Path to your entry file
        name: 'Litquiz', // Global name for the library (used in UMD format)
        fileName: 'Litquiz', // Output file name
        formats: ['es', 'umd'], // Export in ES Module and UMD formats
      },
      rollupOptions: {
        output: {
          dir: distribution_folder,
          entryFileNames: `js/app.[format].js`,
          assetFileNames: `[ext]/[name].[ext]`,
        },
      },
    },
    define: {
      "import.meta.env.PACKAGE_VERSION": JSON.stringify(process.env.npm_package_version),
    },
  });
};