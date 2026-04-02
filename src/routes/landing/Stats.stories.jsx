import Stats from './Stats';

export default {
  title: 'AI Generated/Medium/Stats',
  component: Stats,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {};

export const WithBackground = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
