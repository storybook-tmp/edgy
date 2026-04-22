import { expect } from 'storybook/test';
import Team from './Team';

const meta = {
  component: Team,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  render: () => <Team />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /meet our team/i })).toBeVisible();
  },
};

export const WithTeamMembers = {
  render: () => <Team />,
  play: async ({ canvas }) => {
    const teamImages = canvas.getAllByRole('img');
    await expect(teamImages.length).toBeGreaterThan(0);
  },
};

export const WithDescription = {
  render: () => <Team />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/human touch/i)).toBeVisible();
  },
};
