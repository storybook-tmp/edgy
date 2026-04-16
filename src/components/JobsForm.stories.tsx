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

function renderJobsForm() {
  return (
    <div className="bg-gray-900 px-4 py-12">
      <JobsForm />
    </div>
  );
}

export const Default: Story = {
  render: renderJobsForm,
};

export const ValidationError: Story = {
  render: renderJobsForm,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button', { name: /let's do this/i }));
    await expect(
      await canvas.findByText(/empty email field/i),
    ).toBeInTheDocument();
  },
};
