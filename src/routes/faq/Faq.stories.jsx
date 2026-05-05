import { expect } from 'storybook/test';
import Faq from './Faq';

const meta = {
  component: Faq,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText('Frequently Asked Questions'),
    ).toBeVisible();
    await expect(canvas.getByText('Ready to dive in?')).toBeVisible();
  },
};

export const ExpandQuestion = {
  play: async ({ canvas, userEvent }) => {
    const buttons = canvas.getAllByRole('button');
    const firstQuestion = buttons[0];
    await userEvent.click(firstQuestion);
    // After clicking, the answer panel should be visible
    const answerPanels = canvas.getAllByRole('definition');
    await expect(answerPanels.length).toBeGreaterThanOrEqual(1);
  },
};
