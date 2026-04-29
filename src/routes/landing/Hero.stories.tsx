import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Hero from './Hero';

const meta = {
  component: Hero,
  tags: ['ai-generated'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/your instagram growth secret/i)).toBeVisible();
    await expect(canvas.getByPlaceholderText(/enter your email/i)).toBeVisible();
  },
};

export const InvalidEmailSubmit: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByPlaceholderText(/enter your email/i), 'not-an-email');
    await userEvent.click(canvas.getByRole('button', { name: /start free trial/i }));
    await expect(await canvas.findByText(/invalid email format/i)).toBeVisible();
  },
};

export const SuccessfulSubmit: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByPlaceholderText(/enter your email/i), 'test@example.com');
    await userEvent.click(canvas.getByRole('button', { name: /start free trial/i }));
    await expect(await canvas.findByText(/hold tight/i)).toBeVisible();
  },
};
