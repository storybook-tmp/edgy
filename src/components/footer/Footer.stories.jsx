import { expect } from 'storybook/test';
import Footer from './Footer';

const meta = {
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/solutions/i)).toBeVisible();
    await expect(canvas.getByText(/support@edgy\.com/i)).toBeVisible();
    await expect(canvas.getByText('2026')).toBeVisible();
    await expect(canvas.getByText(/all rights reserved/i)).toBeVisible();
  },
};
