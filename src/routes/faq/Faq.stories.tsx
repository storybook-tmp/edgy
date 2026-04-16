import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import FaqPage from './Faq';

const meta = {
  component: FaqPage,
  parameters: {
    initialEntries: ['/faq'],
  },
} satisfies Meta<typeof FaqPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /frequently asked questions/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: /how does edgy work/i })
    ).toBeVisible();
  },
};

export const ExpandedAnswer: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole('button', { name: /how does edgy work/i })
    );

    await waitFor(async () => {
      await expect(
        canvas.getByText(/authentic and organic instagram growth/i)
      ).toBeVisible();
    });
  },
};

export const CallToActionVisible: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /get started/i })
    ).toHaveAttribute('href', '/sign-up');
  },
};
