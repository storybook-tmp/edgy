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

export const OnCanvas: Story = {
  render: () => (
    <div className="bg-gray-950 px-6 py-10">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gray-900">
        <Stats />
      </div>
    </div>
  ),
};
