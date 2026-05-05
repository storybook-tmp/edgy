import { expect } from 'storybook/test';
import Team from './Team';

const meta = {
  component: Team,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/meet our team/i)).toBeVisible();
  },
};

export const WithTeamMembers = {
  play: async ({ canvas }) => {
    const teamImages = canvas.getAllByRole('img');
    await expect(teamImages.length).toBeGreaterThan(0);
    const twitterLinks = canvas.getAllByText('Twitter');
    await expect(twitterLinks.length).toBeGreaterThan(0);
    const linkedinLinks = canvas.getAllByText('LinkedIn');
    await expect(linkedinLinks.length).toBeGreaterThan(0);
  },
};

export const WithTeamDescription = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(/it takes some of the same principles/i)
    ).toBeVisible();
  },
};
