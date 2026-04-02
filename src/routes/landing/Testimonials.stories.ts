import preview from '../../../.storybook/preview';

import Testimonials from './Testimonials';

const meta = preview.meta({
  title: 'AI Generated/Simple/Testimonials',
  component: Testimonials,
});

export const Default = meta.story({});

export const Centered = meta.story({
  parameters: {
    layout: 'centered',
  },
});
