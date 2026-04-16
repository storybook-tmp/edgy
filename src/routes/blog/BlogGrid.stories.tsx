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
    <div className="bg-gray-900 px-6 py-10">
      <BlogGrid />
    </div>
  ),
};

export const InContentShell: Story = {
  render: () => (
    <div className="bg-gray-950 px-6 py-12">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gray-900 p-8">
        <BlogGrid />
      </div>
    </div>
  ),
};
