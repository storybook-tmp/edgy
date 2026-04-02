import type { Meta, StoryObj } from '@storybook/react-vite';
import BlogGrid from './BlogGrid';

const meta = {
  title: 'AI Generated/Medium/BlogGrid',
  component: BlogGrid,
} satisfies Meta<typeof BlogGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPadding: Story = {
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', backgroundColor: '#111827' }}>
        <Story />
      </div>
    ),
  ],
};
