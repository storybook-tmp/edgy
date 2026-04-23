import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';

import JobsForm from './JobsForm';

const meta = {
  title: 'AI Generated/Complex/JobsForm',
  component: JobsForm,
  decorators: [
    (Story) => (
      <section className="bg-gray-900 py-8">
        <Story />
      </section>
    ),
  ],
} satisfies Meta<typeof JobsForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SuccessfulSubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText(/Enter your email/i),
      'jobs@example.com'
    );
    await userEvent.click(
      canvas.getByRole('button', { name: /Let's do this/i })
    );

    await expect(
      canvas.getByText(/We received your request! Please check you email\./i)
    ).toBeVisible();
  },
};
