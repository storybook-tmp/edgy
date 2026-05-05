import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Hero from './Hero';

const meta = {
  component: Hero,
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Hero />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(/edgy/i)
    ).toBeVisible();
    await expect(
      canvas.getByText(/your instagram growth secret/i)
    ).toBeVisible();
    await expect(
      canvas.getByPlaceholderText(/enter your email/i)
    ).toBeVisible();
  },
};

export const WithFormInput: Story = {
  render: () => <Hero />,
  play: async ({ canvas, userEvent }) => {
    const emailInput = canvas.getByPlaceholderText(/enter your email/i);
    await expect(emailInput).toBeVisible();

    await userEvent.type(emailInput, 'test@example.com', { delay: 50 });

    await expect(emailInput).toHaveValue('test@example.com');
  },
};
