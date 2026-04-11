import { expect } from 'storybook/test';
import Landing from './Landing';

export default {
  component: Landing,
};

export const LoggedOut = {
  render: () => <Landing loggedIn={false} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /edgy/i })).toBeVisible();
    await expect(
      canvas.getByText(/instagram growth secret/i)
    ).toBeVisible();
  },
};

export const LoggedIn = {
  render: () => <Landing loggedIn={true} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /edgy/i })).toBeVisible();
    const profileLinks = canvas.getAllByRole('link', { name: /get started/i });
    await expect(profileLinks.length).toBeGreaterThan(0);
  },
};
