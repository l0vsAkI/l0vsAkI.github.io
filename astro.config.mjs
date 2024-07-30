import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import UnoCSS from "unocss/astro";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "_l0vsAkI.",
    social: {
      github: "https://github.com/l0vsAkI"
    },
    sidebar: [{
      label: "env",
      autogenerate: {
        directory: "env"
      }
    }, {
      label: "dev",
      autogenerate: {
        directory: "dev"
      }
    }, {
      label: "css",
      autogenerate: {
        directory: "css"
      }
    }]
  }), UnoCSS({
    injectReset: true
  }), sentry(), spotlightjs()]
});