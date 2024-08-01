import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import UnoCSS from "unocss/astro";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://l0vsAkI.github.io",
  integrations: [
    starlight({
      title: "_l0vsAkI.",
      social: {
        github: "https://github.com/l0vsAkI",
      },
      sidebar: [
        {
          label: "env",
          autogenerate: {
            directory: "env",
          },
        },
        {
          label: "dev",
          autogenerate: {
            directory: "dev",
          },
        },
        {
          label: "css",
          autogenerate: {
            directory: "css",
          },
        },
      ],
      components: {
        PageFrame: "./src/components/PageFrame.astro",
        SiteTitle: "./src/components/SiteTitle.astro",
        Head: "./src/components/Head.astro",
      },
      customCss: ["./src/styles/custom.css"],
    }),
    UnoCSS({
      injectReset: true,
    }),
    sentry(),
    spotlightjs(),
  ],
});
