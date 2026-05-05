import { expect } from 'storybook/test';
import Team from './Team';

const meta = {
  component: Team,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Meet Our Team/i)).toBeVisible();
    const teamMembers = canvas.getAllByRole('listitem');
    await expect(teamMembers.length).toBeGreaterThan(0);
  },
};
