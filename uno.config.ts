// uno.config.ts
import {
  defineConfig,
  presetWebFonts,
  presetUno,
  presetIcons,
  presetAttributify,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        mono: ["jet-brains-mono"],
      },
    }),
    presetIcons({
      cdn: "https://esm.sh/",
    }),
    presetAttributify({}),
  ],
});
