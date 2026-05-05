import { expect } from 'storybook/test';
import Cta from './Cta';

const meta = {
  component: Cta,
  tags: ['ai-generated'],
  args: {
    loggedIn: false,
  },
};

export default meta;

export const LoggedOut = {
  play: async ({ canvas }) => {
    const link = canvas.getByRole('link', { name: /get started/i });
    await expect(link).toHaveAttribute('href', '/sign-up');
  },
};

export const LoggedIn = {
  args: { loggedIn: true },
  play: async ({ canvas }) => {
    const link = canvas.getByRole('link', { name: /get started/i });
    await expect(link).toHaveAttribute('href', '/profile');
  },
};
