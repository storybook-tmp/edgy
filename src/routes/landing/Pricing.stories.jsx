import { expect } from 'storybook/test';
import Pricing from './Pricing';

const meta = {
  component: Pricing,
  tags: ['ai-generated'],
  args: {
    loggedIn: false,
  },
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/instagram growth plans/i)).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /standard/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /premium/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /business/i })).toBeVisible();
  },
};

export const LoggedIn = {
  args: { loggedIn: true },
};

export const CssCheck = {
  play: async ({ canvas }) => {
    const badge = canvas.getByText(/in demand/i);
    await expect(getComputedStyle(badge).backgroundColor).toBe('oklch(0.511 0.262 276.966)');
  },
};
