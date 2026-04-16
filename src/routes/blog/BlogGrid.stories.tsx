import type { Meta, StoryObj } from '@storybook/react-vite';

import BlogGrid from './BlogGrid';

const meta = {
  title: 'AI Generated/Medium/BlogGrid',
  component: BlogGrid,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="bg-gray-900 px-4 py-12">
      <BlogGrid />
    </div>
  ),
};

export const NarrowCanvas: Story = {
  render: () => (
    <div className="bg-gray-900 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <BlogGrid />
      </div>
    </div>
  ),
};
