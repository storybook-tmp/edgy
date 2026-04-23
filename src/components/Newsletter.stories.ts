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

export const Submitted: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByLabelText(/email address/i),
      'newsletter@example.com'
    );
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));

    await expect(
      canvas.getByText(/our representative will contact you shortly via email/i)
    ).toBeInTheDocument();
  },
};
