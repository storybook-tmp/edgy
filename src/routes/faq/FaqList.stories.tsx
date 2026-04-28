import preview from '../../../.storybook/preview';
import { expect } from 'storybook/test';
import FaqList from './FaqList';

const meta = preview.meta({
  component: FaqList,
  tags: ['ai-generated'],
});

export default meta;

export const Default = meta.story({
  play: async ({ canvas }) => {
    const buttons = canvas.getAllByRole('button');
    await expect(buttons.length).toBeGreaterThanOrEqual(1);
    await expect(canvas.getByText(/how does edgy work/i)).toBeVisible();
  },
});

export const ExpandedItem = meta.story({
  play: async ({ canvas, userEvent }) => {
    const firstButton = canvas.getAllByRole('button')[0];
    await userEvent.click(firstButton);
    const answers = canvas.getAllByRole('definition');
    await expect(answers.length).toBeGreaterThanOrEqual(1);
  },
});

export const MultipleItems = meta.story({
  play: async ({ canvas }) => {
    const buttons = canvas.getAllByRole('button');
    await expect(buttons.length).toBeGreaterThanOrEqual(5);
  },
});
