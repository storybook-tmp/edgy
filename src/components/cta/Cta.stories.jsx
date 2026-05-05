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

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/ready to dive in/i)).toBeVisible();
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
