import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import Blog from './Blog';

const meta = {
  component: Blog,
  parameters: {
    routePath: '/blog',
  },
} satisfies Meta<typeof Blog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /edgy blog/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /how to start an instagram blog/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('heading', { name: /sign up for our newsletter/i })
    ).toBeVisible();
  },
};

export const NavigateToFirstPost: Story = {
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(
      canvas.getByRole('link', { name: /how to start an instagram blog/i })
    );

    await expect(getRouterPath(canvasElement.ownerDocument)).toBe(
      '/blog/how-to-start-an-instagram-blog'
    );
  },
};

export const NewsletterSignup: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      'newsletter@edgy.com'
    );
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));

    await waitFor(async () => {
      await expect(
        canvas.getByText(/our representative will contact you shortly via email/i)
      ).toBeVisible();
    });
  },
};

function getRouterPath(ownerDocument: Document) {
  const marker = ownerDocument.querySelector('[data-router-path]');

  if (!marker) {
    throw new Error('Unable to find the router path marker.');
  }

  return marker.textContent;
}
