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
    await expect(canvas.getByText(/whitney francis/i)).toBeVisible();
  },
};
