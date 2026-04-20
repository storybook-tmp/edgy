import type { StorybookConfig } from '@storybook/react-vite';

const storybookEnv = {
  VITE_AIRTABLE_ID: 'storybookBase',
  VITE_AIRTABLE_KEY: 'storybook-airtable-key',
  VITE_AIRTABLE_SERVER_URL: '/storybook/airtable/users',
  VITE_CAPTCHA_KEY: 'storybook-captcha-key',
  VITE_CAPTCHA_SECRET: 'storybook-captcha-secret',
  VITE_SERVER_URL: '/storybook/captcha/verify',
};

Object.entries(storybookEnv).forEach(([key, value]) => {
  process.env[key] ??= value;
});

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    './eval-support/*.mdx',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: '@storybook/react-vite',
  staticDirs: ['../public'],
  viteFinal: async (config) => ({
    ...config,
    define: {
      ...config.define,
      'import.meta.env.VITE_AIRTABLE_ID': JSON.stringify(
        process.env.VITE_AIRTABLE_ID
      ),
      'import.meta.env.VITE_AIRTABLE_KEY': JSON.stringify(
        process.env.VITE_AIRTABLE_KEY
      ),
      'import.meta.env.VITE_AIRTABLE_SERVER_URL': JSON.stringify(
        process.env.VITE_AIRTABLE_SERVER_URL
      ),
      'import.meta.env.VITE_CAPTCHA_KEY': JSON.stringify(
        process.env.VITE_CAPTCHA_KEY
      ),
      'import.meta.env.VITE_CAPTCHA_SECRET': JSON.stringify(
        process.env.VITE_CAPTCHA_SECRET
      ),
      'import.meta.env.VITE_SERVER_URL': JSON.stringify(
        process.env.VITE_SERVER_URL
      ),
    },
  }),
};

export default config;
