import preview from '../../../.storybook/preview';
import { expect, waitFor } from 'storybook/test';
import Pricing from './Pricing';

const meta = preview.meta({
  component: Pricing,
  tags: ['ai-generated'],
});

export default meta;

export const Default = meta.story({
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /instagram growth plans/i })).toBeVisible();
    await expect(canvas.getByText(/pricing comparison/i)).toBeVisible();
  },
});

export const LoggedIn = meta.story({
  args: {
    loggedIn: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /instagram growth plans/i })).toBeVisible();
  },
});

export const HasPricingTiers = meta.story({
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    // Pricing tiers appear as headings in the mobile view or column headers in desktop view
    const buyButtons = canvas.getAllByRole('link', { name: /buy/i });
    await expect(buyButtons.length).toBeGreaterThanOrEqual(3);
  },
});
