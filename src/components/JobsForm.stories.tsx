import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import JobsForm from './JobsForm';

const meta = {
  title: 'AI Generated/Complex/JobsForm',
  component: JobsForm,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof JobsForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ValidationError: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = await canvas.findByPlaceholderText(/enter your email/i);
    const submitButton = await canvas.findByRole('button', {
      name: /let's do this/i,
    });

    await userEvent.type(emailInput, 'invalid-email');
    await userEvent.click(submitButton);

    await expect(canvas.getByText(/invalid email format/i)).toBeVisible();
  },
};
