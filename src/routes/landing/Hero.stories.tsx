import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import Hero from './Hero';

const meta = {
  component: Hero,
  parameters: {
    routePath: '/',
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/^edgy$/i)).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: /start free trial/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /terms of service/i })
    ).toBeVisible();
  },
};

export const ValidationError: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole('button', { name: /start free trial/i })
    );

    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};

export const SuccessfulSubmission: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      'growth@edgy.com'
    );
    await userEvent.click(
      canvas.getByRole('button', { name: /start free trial/i })
    );

    await waitFor(async () => {
      await expect(
        canvas.getByText(/our representative will contact you shortly via email/i)
      ).toBeVisible();
    });
  },
};
