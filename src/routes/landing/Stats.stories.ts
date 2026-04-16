import { config } from '../../../.storybook/preview';

import Stats from './Stats';

const meta = config.meta({
  title: 'AI Generated/Simple/Stats',
  component: Stats,
  parameters: {
    layout: 'fullscreen',
  },
});

export const Default = meta.story();

export const PaddedCanvas = meta.story({
  parameters: {
    layout: 'padded',
  },
});
