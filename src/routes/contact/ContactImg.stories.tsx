import type { Meta, StoryObj } from '@storybook/react-vite';

import ContactImg from './ContactImg';

const meta = {
  title: 'AI Generated/Simple/ContactImg',
  component: ContactImg,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ContactImg>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardHeight: Story = {
  render: () => (
    <div className="relative min-h-80 bg-gray-900">
      <ContactImg />
    </div>
  ),
};

export const TallLayout: Story = {
  render: () => (
    <div className="relative min-h-[32rem] bg-gray-900">
      <ContactImg />
    </div>
  ),
};
