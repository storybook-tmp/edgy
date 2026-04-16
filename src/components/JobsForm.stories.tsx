import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import JobsForm from './JobsForm';

const meta = {
  component: JobsForm,
} satisfies Meta<typeof JobsForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ValidationError: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      await canvas.findByRole('button', { name: "Let's do this" })
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
      'jobs@edgy.com'
    );
    await userEvent.click(
      await canvas.findByRole('button', { name: "Let's do this" })
    );

    await expect(
      await canvas.findByText(/we received your request/i)
    ).toBeInTheDocument();
  },
};
