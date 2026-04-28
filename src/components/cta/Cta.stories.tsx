import preview from '../../../.storybook/preview';
import { expect } from 'storybook/test';
import Cta from './Cta';

const meta = preview.meta({
  component: Cta,
  tags: ['ai-generated'],
});

export default meta;

export const LoggedOut = meta.story({
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/ready to dive in/i)).toBeVisible();
    await expect(canvas.getByText(/start your free trial today/i)).toBeVisible();
    const link = canvas.getByRole('link', { name: /get started/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '/sign-up');
  },
});

export const LoggedIn = meta.story({
  args: {
    loggedIn: true,
  },
  play: async ({ canvas }) => {
    const link = canvas.getByRole('link', { name: /get started/i });
    await expect(link).toHaveAttribute('href', '/profile');
  },
});

export const StyleCheck = meta.story({
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    const link = canvas.getByRole('link', { name: /get started/i });
    const bgColor = getComputedStyle(link).backgroundColor;
    // bg-indigo-600 should produce a non-transparent background
    await expect(bgColor).not.toBe('rgba(0, 0, 0, 0)');
    await expect(bgColor).not.toBe('transparent');
  },
});
