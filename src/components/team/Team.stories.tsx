import type { Meta, StoryObj } from '@storybook/react-vite';

import Team from './Team';

const meta = {
  title: 'AI Generated/Medium/Team',
  component: Team,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Team>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const EditorialFraming: Story = {
  render: () => (
    <div className="bg-gray-950 px-6 py-12">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 shadow-2xl shadow-black/20">
        <Team />
      </div>
    </div>
  ),
};
