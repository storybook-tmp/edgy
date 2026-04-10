import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import faq from '../../data/faq';
import Faq from './Faq';

const meta = {
  component: Faq,
} satisfies Meta<typeof Faq>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /frequently asked questions/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: faq[0].question })
    ).toBeVisible();
  },
};

export const OpensFirstAnswer: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole('button', { name: faq[0].question })
    );

    await expect(canvas.getByText(faq[0].answer)).toBeVisible();
  },
};

export const StartsTrial: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /get started/i })
    ).toHaveAttribute('href', '/sign-up');
  },
};
