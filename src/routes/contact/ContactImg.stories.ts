import preview from '../../../.storybook/preview';

import ContactImg from './ContactImg';

const meta = preview.meta({
  title: 'AI Generated/Simple/ContactImg',
  component: ContactImg,
});

export const Fullscreen = meta.story({});

export const Padded = meta.story({
  parameters: {
    layout: 'padded',
  },
});
