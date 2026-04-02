import type { Meta, StoryObj } from '@storybook/react-vite';

import Stats from './Stats';

const meta = {
  title: 'AI Generated/Medium/Stats',
  component: Stats,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Stats>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FramedSection: Story = {
  render: () => (
    <div className="bg-gray-950 px-6 py-12">
      <div className="overflow-hidden rounded-3xl border border-white/10">
        <Stats />
      </div>
    </div>
  ),
};
