import { expect } from 'storybook/test';
import FaqList from './FaqList';

export default {
  component: FaqList,
  tags: ['ai-generated'],
};

export const Default = {
  play: async ({ canvas }) => {
    // FAQ items are rendered from faq data — at least one question should be visible
    const buttons = canvas.getAllByRole('button');
    await expect(buttons.length).toBeGreaterThan(0);
    await expect(buttons[0]).toBeVisible();
  },
};

export const ExpandItem = {
  play: async ({ canvas, userEvent }) => {
    const buttons = canvas.getAllByRole('button');
    const firstButton = buttons[0];
    await expect(firstButton).toBeVisible();
    await userEvent.click(firstButton);
    // After clicking the first FAQ item, its answer text should appear
    await expect(canvas.getByText(/at edgy, we work diligently/i)).toBeVisible();
  },
};

export const MultipleItems = {
  play: async ({ canvas }) => {
    const buttons = canvas.getAllByRole('button');
    await expect(buttons.length).toBeGreaterThan(1);
  },
};
