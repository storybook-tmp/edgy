import type { Meta, StoryObj } from '@storybook/react-vite';

import Feature from './Feature';

const meta = {
  title: 'AI Generated/Medium/Feature',
  component: Feature,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Feature>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FramedSection: Story = {
  render: () => (
    <div className="bg-gray-950 px-6 py-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gray-900">
        <Feature />
      </div>
    </div>
  ),
};
