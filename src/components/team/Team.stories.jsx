import preview from '../../../.storybook/preview';
import { expect } from 'storybook/test';
import Team from './Team';

const meta = preview.meta({
  component: Team,
  tags: ['ai-generated'],
});

export default meta;

export const Default = meta.story({
  render: () => <Team />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText('Meet Our Team')
    ).toBeVisible();
    // Verify team member images are rendered
    const teamImages = canvas.getAllByAltText(/Team member/);
    await expect(teamImages.length).toBeGreaterThan(0);
  },
});
