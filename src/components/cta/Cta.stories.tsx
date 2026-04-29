import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Cta from './Cta';

const meta = {
  component: Cta,
  tags: ['ai-generated'],
  args: { loggedIn: false },
} satisfies Meta<typeof Cta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /get started/i })).toHaveAttribute('href', '/sign-up');
  },
};

export const LoggedIn: Story = {
  args: { loggedIn: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /get started/i })).toHaveAttribute('href', '/profile');
  },
};
