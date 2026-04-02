import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import FaqList from './FaqList';

const meta = {
  title: 'AI Generated/Medium/FaqList',
  component: FaqList,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FaqList>;

export default meta;

type Story = StoryObj<typeof meta>;

function renderFaqList() {
  return (
    <div className="bg-gray-900 px-4 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <FaqList />
      </div>
    </div>
  );
}

export const Default: Story = {
  render: renderFaqList,
};

export const FirstItemExpanded: Story = {
  render: renderFaqList,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const question = canvas.getByRole('button', {
      name: /how does edgy work\?/i,
    });

    await userEvent.click(question);
    await expect(
      canvas.getByText(/authentic and organic instagram growth/i),
    ).toBeInTheDocument();
  },
};
