import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    './eval-support/*.mdx',
  ],
  staticDirs: ['../public'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    return mergeConfig(config, {
      define: {
        'import.meta.env.VITE_AIRTABLE_ID': JSON.stringify(
          'appstorybookairtableid'
        ),
        'import.meta.env.VITE_AIRTABLE_KEY': JSON.stringify(
          'storybook-airtable-key'
        ),
        'import.meta.env.VITE_AIRTABLE_SERVER_URL': JSON.stringify(
          'https://storybook.test/api/airtable'
        ),
        'import.meta.env.VITE_CAPTCHA_KEY': JSON.stringify(
          'storybook-captcha-key'
        ),
        'import.meta.env.VITE_CAPTCHA_SECRET': JSON.stringify(
          'storybook-captcha-secret'
        ),
        'import.meta.env.VITE_SERVER_URL': JSON.stringify(
          'https://storybook.test/api/captcha'
        ),
      },
    });
  },
};

export default config;
