import { expect } from 'storybook/test';
import Cta from './Cta';

export default {
  component: Cta,
  tags: ['ai-generated'],
};

export const LoggedOut = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    const link = canvas.getByRole('link', { name: /get started/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '/sign-up');
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvas }) => {
    const link = canvas.getByRole('link', { name: /get started/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '/profile');
  },
};

export const Headline = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/ready to dive in/i)).toBeVisible();
    await expect(canvas.getByText(/start your free trial today/i)).toBeVisible();
  },
};
