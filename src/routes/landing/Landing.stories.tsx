import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import Landing from './Landing';

const meta = {
  component: Landing,
  args: {
    loggedIn: false,
  },
} satisfies Meta<typeof Landing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Landing loggedIn={false} />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /your instagram growth secret/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('heading', { name: /meet our team/i })
    ).toBeVisible();
  },
};

export const LoggedInCtas: Story = {
  render: () => <Landing loggedIn={true} />,
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('link', { name: /get started/i })[0]).toHaveAttribute(
      'href',
      '/profile'
    );
    await expect(canvas.getAllByRole('link', { name: /buy standard/i })[0]).toHaveAttribute(
      'href',
      '/profile'
    );
  },
};

export const HeroValidationError: Story = {
  render: () => <Landing loggedIn={false} />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole('button', { name: /start free trial/i })
    );

    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};
