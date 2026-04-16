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

export const ValidationError: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button', { name: 'Notify me' }));

    await expect(canvas.getByText('Empty email field')).toBeVisible();
  },
};

export const Submitted: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText('Enter your email'),
      'hello@edgy.com'
    );
    await userEvent.click(canvas.getByRole('button', { name: 'Notify me' }));

    await expect(
      canvas.getByText(/our representative will contact you shortly/i)
    ).toBeVisible();
  },
};
