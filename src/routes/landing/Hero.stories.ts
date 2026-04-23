import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';

import Hero from './Hero';

const meta = {
  title: 'AI Generated/Complex/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Submitted: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      'growth@example.com'
    );
    await userEvent.click(canvas.getByRole('button', { name: /start free trial/i }));

    await expect(
      canvas.getByText(/our representative will contact you shortly via email/i)
    ).toBeInTheDocument();
  },
};
