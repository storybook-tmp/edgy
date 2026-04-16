import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Footer from './Footer';

const meta = {
  component: Footer,
  parameters: {
    initialEntries: ['/'],
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /solutions/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /pricing/i })
    ).toHaveAttribute('href', '/pricing');
  },
};

export const SocialLinks: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /github/i })
    ).toHaveAttribute(
      'href',
      'https://github.com/catherineisonline/edgy'
    );
    await expect(
      canvas.getByRole('link', { name: /linkedin/i })
    ).toBeVisible();
  },
};

export const CopyrightYear: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/2024/)).toBeVisible();
    await expect(
      canvas.getByText(/all rights reserved/i)
    ).toBeVisible();
  },
};
