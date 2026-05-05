import { expect } from 'storybook/test';
import Pricing from './Pricing';

export default {
  component: Pricing,
};

export const LoggedOut = {
  render: () => <Pricing loggedIn={false} />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /instagram growth plans/i })
    ).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /standard/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /premium/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /business/i })).toBeVisible();
  },
};

export const LoggedIn = {
  render: () => <Pricing loggedIn={true} />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /instagram growth plans/i })
    ).toBeVisible();
    const links = canvas.getAllByRole('link', { name: /get started/i });
    await expect(links.length).toBeGreaterThan(0);
  },
};

export const PricingDetails = {
  render: () => <Pricing loggedIn={false} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText('79')).toBeVisible();
    await expect(canvas.getByText('149')).toBeVisible();
    await expect(canvas.getByText('349')).toBeVisible();
  },
};
