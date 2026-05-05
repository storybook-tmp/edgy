import { expect, within } from 'storybook/test';
import Team from './Team';

export default {
  component: Team,
  tags: ['ai-generated'],
};

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/meet our team/i)).toBeVisible();
    const teamMembers = canvas.getAllByRole('listitem');
    await expect(teamMembers.length).toBeGreaterThanOrEqual(1);
  },
};

export const WithSocialLinks = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const twitterLinks = canvas.getAllByText(/twitter/i);
    await expect(twitterLinks.length).toBeGreaterThanOrEqual(1);
    const linkedinLinks = canvas.getAllByText(/linkedin/i);
    await expect(linkedinLinks.length).toBeGreaterThanOrEqual(1);
  },
};
