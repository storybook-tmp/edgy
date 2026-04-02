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
  viteFinal: async (config) => {
    config.define = {
      ...config.define,
      'import.meta.env.VITE_CAPTCHA_KEY': JSON.stringify('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'),
    };
    return config;
  },
};

export default config;
