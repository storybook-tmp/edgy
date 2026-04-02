import { createElement } from 'react';

import { config } from '../../../.storybook/preview';

import ContactImg from './ContactImg';

const withFrame = (heightClass: string) => (Story: () => unknown) =>
  createElement(
    'div',
    {
      className: `relative overflow-hidden rounded-3xl bg-gray-950 ${heightClass}`,
    },
    createElement(Story),
  );

const meta = config.meta({
  title: 'AI Generated/Simple/ContactImg',
  component: ContactImg,
  parameters: {
    layout: 'padded',
  },
});

export const Default = meta.story({
  decorators: [withFrame('min-h-80')],
});

export const TallCrop = meta.story({
  decorators: [withFrame('min-h-[32rem]')],
});
