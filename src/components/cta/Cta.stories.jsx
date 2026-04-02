import { expect, within } from 'storybook/test';

import Cta from './Cta';

export default {
  title: 'AI Generated/Simple/Cta',
  component: Cta,
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoggedOut = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: /get started/i });
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
