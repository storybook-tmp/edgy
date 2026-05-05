import { expect } from 'storybook/test';
import Pricing from './Pricing';

const meta = {
  component: Pricing,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Pricing Comparison')).toBeVisible();
    await expect(canvas.getByText('Instagram Growth Plans')).toBeVisible();
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Pricing Comparison')).toBeVisible();
  },
};
