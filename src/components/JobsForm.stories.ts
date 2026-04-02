import { createElement } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';

import JobsForm from './JobsForm';

const meta = {
  title: 'AI Generated/Complex/JobsForm',
  component: JobsForm,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) =>
      createElement(
        'section',
        { className: 'bg-gray-900 px-4 py-16 sm:px-6 lg:px-8' },
        createElement(Story)
      ),
  ],
} satisfies Meta<typeof JobsForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Submitted: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      'careers@example.com'
    );
    await userEvent.click(canvas.getByRole('button', { name: /let's do this/i }));

    await expect(
      canvas.getByText(/we received your request! please check you email\./i)
    ).toBeInTheDocument();
  },
};
