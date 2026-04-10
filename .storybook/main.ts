import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const STORYBOOK_AIRTABLE_ID = 'storybook-airtable-id';
const STORYBOOK_AIRTABLE_KEY = 'storybook-airtable-key';
const STORYBOOK_AIRTABLE_URL = 'https://storybook.local/airtable';
const STORYBOOK_CAPTCHA_KEY = 'storybook-captcha-key';
const STORYBOOK_CAPTCHA_SECRET = 'storybook-captcha-secret';
const STORYBOOK_CAPTCHA_URL = 'https://storybook.local/verify-recaptcha';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
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
          STORYBOOK_AIRTABLE_ID
        ),
        'import.meta.env.VITE_AIRTABLE_KEY': JSON.stringify(
          STORYBOOK_AIRTABLE_KEY
        ),
        'import.meta.env.VITE_AIRTABLE_SERVER_URL': JSON.stringify(
          STORYBOOK_AIRTABLE_URL
        ),
        'import.meta.env.VITE_CAPTCHA_KEY': JSON.stringify(
          STORYBOOK_CAPTCHA_KEY
        ),
        'import.meta.env.VITE_CAPTCHA_SECRET': JSON.stringify(
          STORYBOOK_CAPTCHA_SECRET
        ),
        'import.meta.env.VITE_SERVER_URL': JSON.stringify(STORYBOOK_CAPTCHA_URL),
      },
      resolve: {
        alias: {
          'react-google-recaptcha': path.resolve(
            getConfigDirectory(),
            'recaptcha-mock.tsx'
          ),
        },
      },
    });
  },
};

export default config;

function getConfigDirectory() {
  return path.dirname(fileURLToPath(import.meta.url));
}
