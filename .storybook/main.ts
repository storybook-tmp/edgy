import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

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
    return mergeConfig(baseConfig, {
      define: {
        'import.meta.env.VITE_CAPTCHA_KEY': JSON.stringify(
          'storybook-captcha-site-key'
        ),
        'import.meta.env.VITE_CAPTCHA_SECRET': JSON.stringify(
          'storybook-captcha-secret'
        ),
        'import.meta.env.VITE_SERVER_URL': JSON.stringify(
          'https://storybook.test/api/verify-captcha'
        ),
        'import.meta.env.VITE_AIRTABLE_SERVER_URL': JSON.stringify(
          'https://storybook.test/api/airtable/users'
        ),
        'import.meta.env.VITE_AIRTABLE_KEY': JSON.stringify(
          'storybook-airtable-key'
        ),
        'import.meta.env.VITE_AIRTABLE_ID': JSON.stringify(
          'storybook-airtable-base'
        ),
      },
      resolve: {
        alias: {
          'react-google-recaptcha': path.join(
            dirname,
            'recaptcha-stub.tsx'
          ),
        },
      },
    });
  },
};

export default config;
