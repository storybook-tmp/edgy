import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Team from './Team';

const meta = {
  component: Team,
  tags: ['ai-generated'],
} satisfies Meta<typeof Team>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/meet our team/i)).toBeVisible();
  },
};
