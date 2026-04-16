import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import Newsletter from './Newsletter';

const meta = {
  component: Newsletter,
} satisfies Meta<typeof Newsletter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /sign up for our newsletter/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: /notify me/i })
    ).toBeEnabled();
    await expect(
      canvas.getByRole('link', { name: /privacy policy/i })
    ).toHaveAttribute('href', '/privacy');
  },
};

export const ValidationError: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));

    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};

export const Submitted: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      'hello@example.com'
    );
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));

    await expect(
      await canvas.findByText(/hold tight! our representative will contact/i)
    ).toBeVisible();
  },
};
