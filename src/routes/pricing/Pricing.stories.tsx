import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Pricing from './Pricing';

const meta = {
  component: Pricing,
  args: {
    loggedIn: false,
  },
  parameters: {
    initialEntries: ['/pricing'],
  },
} satisfies Meta<typeof Pricing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOutPricing: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /instagram growth plans/i })
    ).toBeVisible();
    const premiumLinks = canvas.getAllByRole('link', { name: /buy premium/i });

    await expect(premiumLinks[0]).toHaveAttribute('href', '/sign-up');
  },
};

export const LoggedInPricing: Story = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvas }) => {
    const businessLinks = canvas.getAllByRole('link', { name: /buy business/i });

    await expect(businessLinks[0]).toHaveAttribute('href', '/profile');
    await expect(canvas.getByText(/pricing comparison/i)).toBeVisible();
  },
};

export const PricingFaqSection: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /frequently asked questions/i })
    ).toBeVisible();
    await expect(
      canvas.getByText(/how many followers should i expect/i)
    ).toBeVisible();
  },
};
