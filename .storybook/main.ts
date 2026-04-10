import type { StorybookConfig } from '@storybook/react-vite';

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
  async viteFinal(baseConfig) {
    return {
      ...baseConfig,
      define: {
        ...baseConfig.define,
        'import.meta.env.VITE_SERVER_URL': JSON.stringify(
          'https://storybook.edgy.test/verify-recaptcha'
        ),
        'import.meta.env.VITE_AIRTABLE_SERVER_URL': JSON.stringify(
          'https://storybook.edgy.test/airtable'
        ),
        'import.meta.env.VITE_CAPTCHA_KEY': JSON.stringify(
          'storybook-captcha-key'
        ),
        'import.meta.env.VITE_CAPTCHA_SECRET': JSON.stringify(
          'storybook-captcha-secret'
        ),
        'import.meta.env.VITE_AIRTABLE_KEY': JSON.stringify(
          'storybook-airtable-key'
        ),
        'import.meta.env.VITE_AIRTABLE_ID': JSON.stringify(
          'storybook-airtable-id'
        ),
      },
    };
  },
};

export default config;
