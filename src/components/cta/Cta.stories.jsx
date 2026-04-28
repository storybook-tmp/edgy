import { expect, within } from 'storybook/test';
import Cta from './Cta';

export default {
  component: Cta,
  tags: ['ai-generated'],
};

export const LoggedOut = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/ready to dive in/i)).toBeVisible();
    await expect(canvas.getByText(/start your free trial today/i)).toBeVisible();
    const link = canvas.getByRole('link', { name: /get started/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '/sign-up');
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: /get started/i });
    await expect(link).toHaveAttribute('href', '/profile');
  },
};
