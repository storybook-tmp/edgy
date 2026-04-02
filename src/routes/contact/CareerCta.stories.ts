import type { Meta, StoryObj } from '@storybook/react';

import CareerCta from './CareerCta';

const meta = {
  title: 'AI Generated/Simple/CareerCta',
  component: CareerCta,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CareerCta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InsetPreview: Story = {
  parameters: {
    layout: 'padded',
  },
};
