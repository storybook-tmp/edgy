import { expect } from 'storybook/test';
import Jobs from './Jobs';

const meta = {
  component: Jobs,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Jobs')).toBeVisible();
    await expect(
      canvas.getByText('Ready to advance your career?'),
    ).toBeVisible();
  },
};
