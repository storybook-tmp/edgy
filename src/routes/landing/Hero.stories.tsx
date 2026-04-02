import type { Meta, StoryObj } from '@storybook/react-vite';
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

export const SuccessfulSubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByPlaceholderText(/enter your email/i);

    await userEvent.type(emailInput, 'growth@edgy.com');
    await userEvent.click(
      canvas.getByRole('button', { name: /start free trial/i }),
    );
    await expect(
      await canvas.findByText(/our representative will contact you shortly/i),
    ).toBeInTheDocument();
  },
};
