import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import FaqPage from './Faq';

const meta = {
  component: FaqPage,
  parameters: {
    routePath: '/faq',
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
      canvas.getByRole('button', { name: /how does edgy work\?/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /get started/i })
    ).toBeVisible();
  },
};

export const FirstAnswerOpen: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole('button', { name: /how does edgy work\?/i })
    );

    await expect(
      canvas.getByText(/authentic and organic instagram growth/i)
    ).toBeVisible();
  },
};

export const FreeTrialAnswerOpen: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole('button', { name: /do you offer any sort of free trial\?/i })
    );

    await expect(
      canvas.getByText(/yes, we do offer a free trial/i)
    ).toBeVisible();
  },
};
