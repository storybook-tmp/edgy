import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import pricingFaq from '../../data/pricingFaq';
import Pricing from './Pricing';

const meta = {
  component: Pricing,
  args: {
    loggedIn: false,
  },
} satisfies Meta<typeof Pricing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SignedOut: Story = {
  render: () => <Pricing loggedIn={false} />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /instagram growth plans/i })
    ).toBeVisible();
    await expect(canvas.getAllByRole('link', { name: /buy standard/i })[0]).toHaveAttribute(
      'href',
      '/sign-up'
    );
  },
};

export const LoggedIn: Story = {
  render: () => <Pricing loggedIn={true} />,
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('link', { name: /buy standard/i })[0]).toHaveAttribute(
      'href',
      '/profile'
    );
    await expect(canvas.getAllByRole('link', { name: /buy premium/i })[0]).toHaveAttribute(
      'href',
      '/profile'
    );
  },
};

export const FaqSection: Story = {
  render: () => <Pricing loggedIn={false} />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /frequently asked questions/i })
    ).toBeVisible();
    await expect(canvas.getByText(pricingFaq[0].question)).toBeVisible();
  },
};
