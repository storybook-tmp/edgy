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
    await expect(canvas.getByText('Standard')).toBeVisible();
    await expect(canvas.getByText('Premium')).toBeVisible();
    await expect(canvas.getByText('Business')).toBeVisible();
    await expect(canvas.getByText('79')).toBeVisible();
    await expect(canvas.getByText('149')).toBeVisible();
    await expect(canvas.getByText('349')).toBeVisible();
  },
};

export const LoggedOut = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    const getStartedLinks = canvas.getAllByText(/get started/i);
    await expect(getStartedLinks.length).toBe(3);
    for (const link of getStartedLinks) {
      await expect(link.closest('a')).toHaveAttribute('href', '/sign-up');
    }
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvas }) => {
    const getStartedLinks = canvas.getAllByText(/get started/i);
    for (const link of getStartedLinks) {
      await expect(link.closest('a')).toHaveAttribute('href', '/profile');
    }
  },
};
