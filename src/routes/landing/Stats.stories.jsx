import { expect } from 'storybook/test';
import Stats from './Stats';

const meta = {
  component: Stats,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Valuable Metrics/i)).toBeVisible();
    await expect(canvas.getByText(/TRUSTED BY THOUSANDS OF BUSINESS OWNERS/i)).toBeVisible();
  },
};
