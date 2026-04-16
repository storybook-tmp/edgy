import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import JobsForm from './JobsForm';

const meta = {
  component: JobsForm,
} satisfies Meta<typeof JobsForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /ready to advance your career/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: /let's do this/i })
    ).toBeEnabled();
  },
};

export const ValidationError: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /let's do this/i }));

    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};

export const Submitted: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      'careers@example.com'
    );
    await userEvent.click(canvas.getByRole('button', { name: /let's do this/i }));

    await expect(
      await canvas.findByText(/we received your request! please check you email/i)
    ).toBeVisible();
  },
};
