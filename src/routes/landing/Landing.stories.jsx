import preview from '../../../.storybook/preview';
import { expect } from 'storybook/test';
import Landing from './Landing';

const meta = preview.meta({
  component: Landing,
  tags: ['ai-generated'],
});

export default meta;

export const LoggedOut = meta.story({
  render: () => <Landing loggedIn={false} />,
  play: async ({ canvas }) => {
    // Hero section
    await expect(canvas.getByText('Edgy')).toBeVisible();
    await expect(canvas.getByText('your Instagram growth secret')).toBeVisible();
    // Feature section
    await expect(canvas.getByText('#1 Instagram Growth Agency')).toBeVisible();
    // Stats section
    await expect(canvas.getByText('Valuable Metrics')).toBeVisible();
    // Team section
    await expect(canvas.getByText('Meet Our Team')).toBeVisible();
  },
});

export const LoggedIn = meta.story({
  render: () => <Landing loggedIn={true} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Edgy')).toBeVisible();
    await expect(canvas.getByText('#1 Instagram Growth Agency')).toBeVisible();
  },
});
