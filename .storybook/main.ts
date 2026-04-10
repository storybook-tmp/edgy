import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import { fileURLToPath } from "node:url";

import { STORYBOOK_ENV } from "./storybook-env.ts";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "./eval-support/*.mdx",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
  ],
  framework: "@storybook/react-vite",
  staticDirs: ["../public"],
  async viteFinal(currentConfig) {
    return mergeConfig(currentConfig, {
      define: Object.fromEntries(
        Object.entries(STORYBOOK_ENV).map(([key, value]) => [
          `import.meta.env.${key}`,
          JSON.stringify(value),
        ])
      ),
      optimizeDeps: {
        include: ["@headlessui/react"],
      },
      resolve: {
        alias: {
          "react-google-recaptcha": fileURLToPath(
            new URL("./storybook-recaptcha.tsx", import.meta.url)
          ),
        },
      },
    });
  },
};

export default config;
