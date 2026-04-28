import preview from '../../../.storybook/preview';
import { expect } from 'storybook/test';
import Team from './Team';

const meta = preview.meta({
  component: Team,
  tags: ['ai-generated'],
});

export default meta;

export const Default = meta.story({
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/meet our team/i)).toBeVisible();
    await expect(canvas.getByText(/whitney francis/i)).toBeVisible();
    await expect(canvas.getByText(/^Manager$/)).toBeVisible();
  },
});

export const HasTeamMembers = meta.story({
  play: async ({ canvas }) => {
    const images = canvas.getAllByRole('img');
    await expect(images.length).toBeGreaterThanOrEqual(4);
  },
});

export const HasSocialLinks = meta.story({
  play: async ({ canvas }) => {
    const twitterLinks = canvas.getAllByRole('link', { name: /twitter/i });
    const linkedinLinks = canvas.getAllByRole('link', { name: /linkedin/i });
    await expect(twitterLinks.length).toBeGreaterThanOrEqual(1);
    await expect(linkedinLinks.length).toBeGreaterThanOrEqual(1);
  },
});
