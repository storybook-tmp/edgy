import { expect } from 'storybook/test';
import Team from './Team';

const meta = {
  component: Team,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Meet Our Team')).toBeVisible();
    const teamMembers = canvas.getAllByRole('listitem');
    await expect(teamMembers.length).toBeGreaterThanOrEqual(1);
  },
};

export const TeamMemberDetails = {
  play: async ({ canvas }) => {
    const twitterLinks = canvas.getAllByText('Twitter');
    await expect(twitterLinks.length).toBeGreaterThanOrEqual(1);
    const linkedinLinks = canvas.getAllByText('LinkedIn');
    await expect(linkedinLinks.length).toBeGreaterThanOrEqual(1);
  },
};
