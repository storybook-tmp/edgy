import preview from '../../../.storybook/preview';

import CareerCta from './CareerCta';

const meta = preview.meta({
  title: 'AI Generated/Simple/CareerCta',
  component: CareerCta,
});

export const Default = meta.story({});

export const Padded = meta.story({
  parameters: {
    layout: 'padded',
  },
});
