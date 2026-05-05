import { expect } from 'storybook/test';
import Stats from './Stats';

export default {
  component: Stats,
  tags: ['ai-generated'],
};

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/trusted by thousands/i)).toBeVisible();
    await expect(canvas.getByText(/valuable metrics/i)).toBeVisible();
  },
};

export const StatItems = {
  play: async ({ canvas }) => {
    // Stats are rendered from companyStats data
    const article = canvas.getByRole('article');
    await expect(article).toBeVisible();
    await expect(canvas.getByText(/instagram/i)).toBeVisible();
  },
};
