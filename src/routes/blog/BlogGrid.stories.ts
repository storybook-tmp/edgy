import type { Meta, StoryObj } from '@storybook/react';

import BlogGrid from './BlogGrid';

const meta = {
  title: 'AI Generated/Medium/BlogGrid',
  component: BlogGrid,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PaddedPreview: Story = {
  parameters: {
    layout: 'padded',
  },
};
