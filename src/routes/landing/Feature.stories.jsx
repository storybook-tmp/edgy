import { expect } from 'storybook/test';
import Feature from './Feature';

const meta = {
  component: Feature,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/100% handcraft growth/i)).toBeVisible();
    await expect(canvas.getByText(/#1 instagram growth agency/i)).toBeVisible();
  },
};
