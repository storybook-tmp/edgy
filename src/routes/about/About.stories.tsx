import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import About from './About';

const meta = {
  component: About,
  parameters: {
    routePath: '/about',
  },
} satisfies Meta<typeof About>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CompanyMission: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /on a mission to empower teams/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('heading', { name: /meet our team/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /get started/i })
    ).toBeVisible();
  },
};

export const ContactUsNavigation: Story = {
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('link', { name: /contact us/i }));
    await expect(getRouterPath(canvasElement.ownerDocument)).toBe('/contact');
  },
};

export const CollaborationSection: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /let's work together/i })
    ).toBeVisible();
    await expect(
      canvas.getByText(/catherine black, ceo at edgy/i)
    ).toBeVisible();
    await expect(
      canvas.getByText(/collaborating with like-minded businesses/i)
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
