import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import FaqList from './FaqList';

const meta = {
  title: 'AI Generated/Complex/FaqList',
  component: FaqList,
  render: () => (
    <div className="bg-gray-900 p-6">
      <FaqList />
    </div>
  ),
} satisfies Meta<typeof FaqList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {};

export const FirstItemExpanded: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole('button', { name: 'How Does Edgy work?' })
    );

    await expect(
      canvas.getByText(/authentic and organic Instagram growth/i)
    ).toBeVisible();
  },
};
