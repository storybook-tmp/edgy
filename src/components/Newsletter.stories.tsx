import type { Meta, StoryObj } from '@storybook/react';
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

    await userEvent.type(
      canvas.getByPlaceholderText(/Enter your email/i),
      'hello@example.com'
    );
    await userEvent.click(canvas.getByRole('button', { name: /Notify me/i }));

    await expect(
      canvas.getByText(/Hold tight! Our representative will contact you shortly/i)
    ).toBeVisible();
  },
};
