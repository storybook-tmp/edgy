import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Cta from './Cta';

const meta = {
  component: Cta,
  parameters: {
    routePath: '/faq',
  },
} satisfies Meta<typeof Cta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOutGetStarted: Story = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('link', { name: /get started/i }));
    await expect(getRouterPath(canvasElement.ownerDocument)).toBe('/sign-up');
  },
};

export const LoggedInGetStarted: Story = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('link', { name: /get started/i }));
    await expect(getRouterPath(canvasElement.ownerDocument)).toBe('/profile');
  },
};

export const VisibleCopy: Story = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(/ready to dive in\?/i)
    ).toBeVisible();
    await expect(
      canvas.getByText(/start your free trial today/i)
    ).toBeVisible();
  },
};

function getRouterPath(ownerDocument: Document) {
  const marker = ownerDocument.querySelector('[data-router-path]');

  if (!marker) {
    throw new Error('Unable to find the router path marker.');
  }

  return marker.textContent;
}
