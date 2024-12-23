import { mount } from 'svelte'
import App from './App.svelte'
import "./styles/main.scss";




export function mountApp(selector = "#literaturquizapp", props = {}) {
  const appContainer = document.querySelector("#literaturquizapp");
  const packageVersion = import.meta.env.PACKAGE_VERSION;
  
  if (!appContainer) {
    throw new Error(`No element found matching the selector "${selector}"`);
  } else {
    appContainer.setAttribute("data-version", packageVersion);
  }
  const target = document.querySelector(selector);
  
  if (!target) {
    throw new Error(`No element found matching the selector "${selector}"`);
  }
  const app = mount(App, {
    target,
    props
  });
  return app;
}

// Optionally, auto-mount the app if needed (for standalone usage)
if (import.meta.env.MODE === "development") {
  mountApp("#literaturquizapp");
}
