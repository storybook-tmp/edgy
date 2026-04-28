import preview from '../../../.storybook/preview';
import { expect } from 'storybook/test';
import Landing from './Landing';

const meta = preview.meta({
  component: Landing,
  tags: ['ai-generated'],
});

export default meta;

export const Default = meta.story({
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/meet our team/i)).toBeVisible();
    await expect(canvas.getByText(/sign up for our newsletter/i)).toBeVisible();
  },
});

export const LoggedIn = meta.story({
  args: {
    loggedIn: true,
  },
  play: async ({ canvas }) => {
    const getStartedLinks = canvas.getAllByRole('link', { name: /get started/i });
    await expect(getStartedLinks.length).toBeGreaterThanOrEqual(1);
    await expect(getStartedLinks[0]).toHaveAttribute('href', '/profile');
  },
});

export const HasAllSections = meta.story({
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/meet our team/i)).toBeVisible();
    await expect(canvas.getByText(/ready to dive in/i)).toBeVisible();
    await expect(canvas.getByText(/sign up for our newsletter/i)).toBeVisible();
  },
});
