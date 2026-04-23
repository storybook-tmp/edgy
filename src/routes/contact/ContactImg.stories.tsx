import type { Meta, StoryObj } from '@storybook/react-vite';

import ContactImg from './ContactImg';

const meta = {
  title: 'AI Generated/Simple/ContactImg',
  component: ContactImg,
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div className="relative min-h-[24rem] overflow-hidden bg-gray-900">
      <ContactImg />
    </div>
  ),
} satisfies Meta<typeof ContactImg>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TallSplitLayout: Story = {
  render: () => (
    <div className="relative min-h-[36rem] overflow-hidden bg-gray-950">
      <ContactImg />
    </div>
  ),
};
