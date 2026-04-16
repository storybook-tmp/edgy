import type { Meta, StoryObj } from '@storybook/react-vite';

import CareerCta from './CareerCta';

const meta = {
  title: 'AI Generated/Simple/CareerCta',
  component: CareerCta,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CareerCta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Framed: Story = {
  render: () => (
    <div className="bg-gray-900 px-6 py-12">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10">
        <CareerCta />
      </div>
    </div>
  ),
};
