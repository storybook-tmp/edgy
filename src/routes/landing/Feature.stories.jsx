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

export const WithAllFeatures = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Flexible plans')).toBeVisible();
    await expect(canvas.getByText('Targeted audience')).toBeVisible();
    await expect(canvas.getByText('Content management')).toBeVisible();
    await expect(canvas.getByText('Organic followers')).toBeVisible();
    await expect(canvas.getByText('Advanced security')).toBeVisible();
    await expect(canvas.getByText('24/7 support')).toBeVisible();
  },
};

export const WithFeatureDescriptions = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/three kinds of plans/i)).toBeVisible();
    await expect(canvas.getByText(/the audience which craves/i)).toBeVisible();
  },
};
