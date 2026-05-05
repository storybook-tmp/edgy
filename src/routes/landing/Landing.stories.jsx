import { expect } from 'storybook/test';
import Landing from './Landing';

export default {
  component: Landing,
};

export const LoggedOut = {
  render: () => <Landing loggedIn={false} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /edgy/i })).toBeVisible();
    await expect(canvas.getByRole('button', { name: /start free trial/i })).toBeVisible();
  },
};

export const LoggedIn = {
  render: () => <Landing loggedIn={true} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /edgy/i })).toBeVisible();
    const getStartedLinks = canvas.getAllByRole('link', { name: /get started/i });
    await expect(getStartedLinks.length).toBeGreaterThan(0);
    await expect(getStartedLinks[0]).toHaveAttribute('href', '/profile');
  },
};
