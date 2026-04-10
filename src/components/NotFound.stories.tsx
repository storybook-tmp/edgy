import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import NotFound from './NotFound';

const meta = {
  component: NotFound,
  parameters: {
    initialEntries: ['/missing-page'],
  },
} satisfies Meta<typeof NotFound>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /this page does not exist/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /back to home/i })
    ).toHaveAttribute('href', '/');
  },
};

export const PopularPages: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /pricing/i })
    ).toHaveAttribute('href', '/pricing');
    await expect(
      canvas.getByText(/we are always hiring/i)
    ).toBeVisible();
  },
};

export const SupportRoutes: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /faq/i })
    ).toHaveAttribute('href', '/faq');
    await expect(
      canvas.getByRole('link', { name: /blog/i })
    ).toHaveAttribute('href', '/blog');
  },
};
