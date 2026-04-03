import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';

import { STORYBOOK_ENV } from './env.ts';

const storybookDir = dirname(fileURLToPath(import.meta.url));

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
      resolve: {
        alias: {
          'react-google-recaptcha': resolve(storybookDir, './RecaptchaMock.jsx'),
        },
      },
      define: {
        'import.meta.env.VITE_AIRTABLE_ID': JSON.stringify('appStorybookBase'),
        'import.meta.env.VITE_AIRTABLE_KEY': JSON.stringify('storybook-airtable-key'),
        'import.meta.env.VITE_AIRTABLE_SERVER_URL': JSON.stringify(STORYBOOK_ENV.airtableUrl),
        'import.meta.env.VITE_CAPTCHA_KEY': JSON.stringify(STORYBOOK_ENV.captchaKey),
        'import.meta.env.VITE_CAPTCHA_SECRET': JSON.stringify(STORYBOOK_ENV.captchaSecret),
        'import.meta.env.VITE_SERVER_URL': JSON.stringify(STORYBOOK_ENV.serverUrl),
      },
    });
  },
};

export default config;
