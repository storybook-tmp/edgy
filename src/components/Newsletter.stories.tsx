import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Newsletter from './Newsletter';

const meta = {
  component: Newsletter,
} satisfies Meta<typeof Newsletter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Newsletter />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(/sign up for our newsletter/i)
    ).toBeVisible();
    await expect(
      canvas.getByPlaceholderText(/enter your email/i)
    ).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: /notify me/i })
    ).toBeVisible();
  },
};

export const WithEmailInput: Story = {
  render: () => <Newsletter />,
  play: async ({ canvas, userEvent }) => {
    const emailInput = canvas.getByPlaceholderText(/enter your email/i);
    await expect(emailInput).toBeVisible();

    await userEvent.type(emailInput, 'test@example.com', { delay: 50 });

    await expect(emailInput).toHaveValue('test@example.com');
  },
};
