import { config } from '../../../.storybook/preview';

import Testimonials from './Testimonials';

const meta = config.meta({
  title: 'AI Generated/Simple/Testimonials',
  component: Testimonials,
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
