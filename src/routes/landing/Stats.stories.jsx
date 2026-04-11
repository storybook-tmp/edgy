import { expect } from 'storybook/test';
import Stats from './Stats';

export default {
  component: Stats,
};

export const Default = {
  render: () => <Stats />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/trusted by thousands/i)).toBeVisible();
    await expect(canvas.getByText(/valuable metrics/i)).toBeVisible();
  },
};
