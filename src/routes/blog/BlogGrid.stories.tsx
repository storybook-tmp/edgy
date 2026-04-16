import type { Meta, StoryObj } from '@storybook/react-vite';
import BlogGrid from './BlogGrid';

const meta = {
  title: 'AI Generated/Complex/BlogGrid',
  component: BlogGrid,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BlogGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FullWidth: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};
