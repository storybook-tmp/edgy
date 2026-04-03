import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import Newsletter from './Newsletter';

const meta = {
  component: Newsletter,
  parameters: {
    initialRoute: '/blog',
  },
} satisfies Meta<typeof Newsletter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ValidationError: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      await canvas.findByRole('button', { name: 'Notify me' })
    );

    await expect(
      await canvas.findByText('Empty email field')
    ).toBeInTheDocument();
  },
};

export const Submitted: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      await canvas.findByPlaceholderText('Enter your email'),
      'hello@edgy.com'
    );
    await userEvent.click(
      await canvas.findByRole('button', { name: 'Notify me' })
    );

    await expect(
      await canvas.findByText(/our representative will contact you shortly/i)
    ).toBeInTheDocument();
  },
};
