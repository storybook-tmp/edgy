import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Pricing from './Pricing';

const meta = {
  component: Pricing,
  parameters: {
    routePath: '/pricing',
  },
} satisfies Meta<typeof Pricing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOutPlans: Story = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvas, canvasElement }) => {
    await expect(
      canvas.getByRole('heading', { name: /instagram growth plans/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('heading', { name: /frequently asked questions/i })
    ).toBeVisible();
    await expect(
      canvasElement.querySelector('a[href="/sign-up"]')
    ).not.toBeNull();
  },
};

export const LoggedInPlans: Story = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvas, canvasElement }) => {
    await expect(
      canvas.getByRole('heading', { name: /pricing comparison/i })
    ).toBeVisible();
    await expect(
      canvasElement.querySelector('a[href="/profile"]')
    ).not.toBeNull();
  },
};

export const ComparisonRows: Story = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getAllByText(/organic follower growth/i).length
    ).toBeGreaterThan(0);
    await expect(
      canvas.getAllByText(/monthly progress report/i).length
    ).toBeGreaterThan(0);
    await expect(
      canvas.getAllByText(/audience insights/i).length
    ).toBeGreaterThan(0);
  },
};
