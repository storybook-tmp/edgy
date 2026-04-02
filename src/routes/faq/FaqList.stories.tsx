import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import FaqList from './FaqList';

const meta = {
  title: 'AI Generated/Complex/FaqList',
  component: FaqList,
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <section className="bg-gray-900 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-extrabold">Frequently asked questions</h2>
        <FaqList />
      </div>
    </section>
  ),
} satisfies Meta<typeof FaqList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {};

export const FirstItemExpanded: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstQuestion = await canvas.findByRole('button', {
      name: /how does edgy work\?/i,
    });

    await userEvent.click(firstQuestion);

    await expect(
      canvas.getByText(/authentic and organic instagram growth/i),
    ).toBeVisible();
  },
};
