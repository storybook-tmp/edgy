import { expect } from 'storybook/test';
import Stats from './Stats';

const meta = {
  component: Stats,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  render: () => <Stats />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/trusted by thousands of business owners/i)).toBeVisible();
  },
};

export const WithMetricsHeading = {
  render: () => <Stats />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/valuable metrics/i)).toBeVisible();
  },
};

export const WithComplianceText = {
  render: () => <Stats />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/100% compliant with instagram/i)).toBeVisible();
  },
};
