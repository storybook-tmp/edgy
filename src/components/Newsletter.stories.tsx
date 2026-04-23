import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import Newsletter from './Newsletter';

const meta = {
  title: 'AI Generated/Complex/Newsletter',
  component: Newsletter,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Newsletter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SuccessfulSubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = await canvas.findByPlaceholderText(/enter your email/i);
    const submitButton = await canvas.findByRole('button', {
      name: /notify me/i,
    });

    await userEvent.type(emailInput, 'hello@example.com');
    await userEvent.click(submitButton);

    await expect(
      canvas.getByText(/contact you shortly via email/i),
    ).toBeVisible();
  },
};
