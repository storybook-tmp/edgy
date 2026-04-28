import { expect, within } from 'storybook/test';
import Pricing from './Pricing';

export default {
  component: Pricing,
  tags: ['ai-generated'],
};

export const Default = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/instagram growth plans/i)).toBeVisible();
    await expect(canvas.getByText('Standard')).toBeVisible();
    await expect(canvas.getByText('Premium')).toBeVisible();
    await expect(canvas.getByText('Business')).toBeVisible();
    await expect(canvas.getByText('79')).toBeVisible();
    await expect(canvas.getByText('149')).toBeVisible();
    await expect(canvas.getByText('349')).toBeVisible();
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const getStartedLinks = canvas.getAllByRole('link', { name: /get started/i });
    for (const link of getStartedLinks) {
      await expect(link).toHaveAttribute('href', '/profile');
    }
  },
};

export const LoggedOut = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const getStartedLinks = canvas.getAllByRole('link', { name: /get started/i });
    for (const link of getStartedLinks) {
      await expect(link).toHaveAttribute('href', '/sign-up');
    }
  },
};
