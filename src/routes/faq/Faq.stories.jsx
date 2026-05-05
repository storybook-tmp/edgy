import { expect } from 'storybook/test';
import Faq from './Faq';

const meta = {
  component: Faq,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Frequently Asked Questions/i)).toBeVisible();
    await expect(canvas.getByText(/Ready to dive in/i)).toBeVisible();
  },
};

export const ExpandQuestion = {
  play: async ({ canvas, userEvent }) => {
    const buttons = canvas.getAllByRole('button');
    await expect(buttons.length).toBeGreaterThan(0);
    await userEvent.click(buttons[0]);
    // After clicking, the panel content should be visible
    const definitions = canvas.getAllByRole('definition');
    await expect(definitions.length).toBeGreaterThan(0);
  },
};
