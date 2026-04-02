import type { Meta, StoryObj } from '@storybook/react';

import ContactImg from './ContactImg';

const meta = {
  title: 'AI Generated/Simple/ContactImg',
  component: ContactImg,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ContactImg>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PaddedPreview: Story = {
  parameters: {
    layout: 'padded',
  },
};
