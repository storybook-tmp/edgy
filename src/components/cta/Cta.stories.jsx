import { expect } from 'storybook/test';
import Cta from './Cta';

const meta = {
  component: Cta,
  tags: ['ai-generated'],
};

export default meta;

export const LoggedOut = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Ready to dive in?')).toBeVisible();
    await expect(canvas.getByText('Start your free trial today.')).toBeVisible();
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
    await expect(link).toHaveAttribute('href', '/profile');
  },
};
