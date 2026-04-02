import type { Meta, StoryObj } from '@storybook/react-vite';
import JobsForm from './JobsForm';

const meta = {
  title: 'AI Generated/Complex/JobsForm',
  component: JobsForm,
  decorators: [
    (Story) => (
      <div className="bg-gray-900" style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof JobsForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithinContainer: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};
