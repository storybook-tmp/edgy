import type { Meta, StoryObj } from '@storybook/react-vite';
import JobsForm from './JobsForm';

const meta = {
  title: 'AI Generated/Complex/JobsForm',
  component: JobsForm,
} satisfies Meta<typeof JobsForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDarkBackground: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
