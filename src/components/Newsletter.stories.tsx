import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Newsletter from './Newsletter';

const meta = {
  component: Newsletter,
  tags: ['ai-generated'],
} satisfies Meta<typeof Newsletter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/sign up for our newsletter/i)).toBeVisible();
    await expect(canvas.getByPlaceholderText(/enter your email/i)).toBeVisible();
  },
};

export const SubmitWithInvalidEmail: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByPlaceholderText(/enter your email/i), 'bad');
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));
    await expect(await canvas.findByText(/invalid email format/i)).toBeVisible();
  },
};

export const SubmitWithValidEmail: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByPlaceholderText(/enter your email/i), 'user@example.com');
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));
    await expect(await canvas.findByText(/hold tight/i)).toBeVisible();
  },
};
