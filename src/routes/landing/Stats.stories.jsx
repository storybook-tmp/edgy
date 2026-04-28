import { expect } from 'storybook/test';
import Stats from './Stats';

const meta = {
  component: Stats,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/valuable metrics/i)).toBeVisible();
    await expect(canvas.getByText(/trusted by thousands/i)).toBeVisible();
  },
};

export const WithStatValues = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('5K+')).toBeVisible();
    await expect(canvas.getByText('205M+')).toBeVisible();
    await expect(canvas.getByText('+150%')).toBeVisible();
    await expect(canvas.getByText('+33%')).toBeVisible();
  },
};

export const WithStatTitles = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Happy Customers')).toBeVisible();
    await expect(canvas.getByText('Followers Gained')).toBeVisible();
    await expect(canvas.getByText('Increased Engagement')).toBeVisible();
    await expect(canvas.getByText('Increased Leads')).toBeVisible();
  },
};
