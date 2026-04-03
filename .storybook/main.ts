import path from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const storybookEnv = {
  VITE_AIRTABLE_ID: "storybook-airtable-base",
  VITE_AIRTABLE_KEY: "storybook-airtable-key",
  VITE_AIRTABLE_SERVER_URL: "https://storybook.local/api/users",
  VITE_CAPTCHA_KEY: "storybook-captcha-key",
  VITE_CAPTCHA_SECRET: "storybook-captcha-secret",
  VITE_SERVER_URL: "https://storybook.local/api/captcha",
};

const config: StorybookConfig = {
  stories: [
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
  async viteFinal(config) {
    return mergeConfig(config, {
      define: Object.fromEntries(
        Object.entries(storybookEnv).map(([key, value]) => [
          `import.meta.env.${key}`,
          JSON.stringify(value),
        ])
      ),
      resolve: {
        alias: {
          "react-google-recaptcha": path.resolve(
            configDir,
            "mocks/GoogleReCaptchaMock.jsx"
          ),
        },
      },
    });
  },
};

export default config;
