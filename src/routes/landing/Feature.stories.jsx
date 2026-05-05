import { expect } from 'storybook/test';
import Feature from './Feature';

const meta = {
  component: Feature,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  render: () => <Feature />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/#1 instagram growth agency/i)).toBeVisible();
  },
};

export const WithFeatureCards = {
  render: () => <Feature />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/100% handcraft growth/i)).toBeVisible();
    await expect(canvas.getByText(/everything you need/i)).toBeVisible();
  },
};

export const WithFeatureNames = {
  render: () => <Feature />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /flexible plans/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /organic followers/i })).toBeVisible();
  },
};
