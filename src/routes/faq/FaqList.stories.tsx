import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import FaqList from './FaqList';

const meta = {
  component: FaqList,
  tags: ['ai-generated'],
} satisfies Meta<typeof FaqList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/how does edgy work/i)).toBeVisible();
  },
};

export const OpenFirstItem: Story = {
  play: async ({ canvas, userEvent }) => {
    const firstButton = canvas.getAllByRole('button')[0];
    await userEvent.click(firstButton);
    await expect(await canvas.findByText(/we work diligently/i)).toBeVisible();
  },
};
