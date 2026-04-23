import type { Meta, StoryObj } from '@storybook/react-vite';
import Feature from './Feature';

const meta = {
  title: 'AI Generated/Medium/Feature',
  component: Feature,
} satisfies Meta<typeof Feature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FullWidth: Story = {
  parameters: {
    layout: 'fullscreen',
  },
};
