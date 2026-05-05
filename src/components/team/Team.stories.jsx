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
    await expect(canvas.getByText('Whitney Francis')).toBeVisible();
    await expect(canvas.getByText('Charly Stuart')).toBeVisible();
  },
};

export const TeamMembers = {
  play: async ({ canvas }) => {
    const members = canvas.getAllByAltText(/Team member/);
    await expect(members.length).toBe(6);
  },
};

export const SocialLinks = {
  play: async ({ canvas }) => {
    const twitterLinks = canvas.getAllByText('Twitter');
    const linkedinLinks = canvas.getAllByText('LinkedIn');
    await expect(twitterLinks.length).toBe(6);
    await expect(linkedinLinks.length).toBe(6);
  },
};
