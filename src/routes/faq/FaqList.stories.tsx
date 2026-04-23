import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';

import FaqList from './FaqList';

const meta = {
  title: 'AI Generated/Medium/FaqList',
  component: FaqList,
  decorators: [
    (Story) => (
      <section className="bg-gray-900 px-6 py-10">
        <Story />
      </section>
    ),
  ],
} satisfies Meta<typeof FaqList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FirstQuestionOpened: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole('button', { name: /How Does Edgy work\?/i })
    );

    await expect(
      canvas.getByText(/authentic and organic Instagram growth/i)
    ).toBeVisible();
  },
};
