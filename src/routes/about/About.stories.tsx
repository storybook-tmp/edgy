import preview from '../../../.storybook/preview';
import { expect } from 'storybook/test';
import About from './About';

const meta = preview.meta({
  component: About,
  tags: ['ai-generated'],
});

export default meta;

export const Default = meta.story({
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/meet our team/i)).toBeVisible();
  },
});

export const HasTeamSection = meta.story({
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/whitney francis/i)).toBeVisible();
  },
});

export const HasCtaSection = meta.story({
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/ready to dive in/i)).toBeVisible();
    await expect(canvas.getByRole('link', { name: /get started/i })).toBeVisible();
  },
});
