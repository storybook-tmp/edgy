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

export const FullBleed: Story = {
  render: () => (
    <div className="relative min-h-[28rem] bg-gray-900">
      <ContactImg />
    </div>
  ),
};

export const SplitPanel: Story = {
  render: () => (
    <div className="grid min-h-[32rem] bg-gray-900 lg:grid-cols-2">
      <div className="flex items-center justify-center p-10 text-center text-white">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold">Workspace Preview</h2>
        </div>
      </div>
      <div className="relative min-h-[20rem]">
        <ContactImg />
      </div>
    </div>
  ),
};
