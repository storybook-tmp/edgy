import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Navigation from './Navigation';

const meta = {
  component: Navigation,
  parameters: {
    routePath: '/pricing',
  },
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

const noop = () => {};

export const LoggedOut: Story = {
  args: {
    loggedIn: false,
    setLoggedIn: noop,
    setTriggeredLogout: noop,
  },
  play: async ({ canvas, canvasElement, userEvent }) => {
    await expect(canvas.getByRole('link', { name: /about/i })).toBeVisible();
    await userEvent.click(canvas.getByRole('link', { name: /sign up/i }));
    await expect(getRouterPath(canvasElement.ownerDocument)).toBe('/sign-up');
  },
};

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
    setLoggedIn: noop,
    setTriggeredLogout: noop,
  },
  play: async ({ canvas, canvasElement, userEvent }) => {
    await expect(
      canvas.getByRole('button', { name: /sign out/i })
    ).toBeVisible();
    await userEvent.click(canvas.getByRole('link', { name: /profile/i }));
    await expect(getRouterPath(canvasElement.ownerDocument)).toBe('/profile');
  },
};

export const SignOutNavigatesHome: Story = {
  args: {
    loggedIn: true,
    setLoggedIn: noop,
    setTriggeredLogout: noop,
  },
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /sign out/i }));
    await expect(getRouterPath(canvasElement.ownerDocument)).toBe('/');
  },
};

function getRouterPath(ownerDocument: Document) {
  const marker = ownerDocument.querySelector('[data-router-path]');

  if (!marker) {
    throw new Error('Unable to find the router path marker.');
  }

  return marker.textContent;
}
