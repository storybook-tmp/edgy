import { expect } from 'storybook/test';
import FaqList from './FaqList';

export default {
  component: FaqList,
};

export const Default = {
  render: () => (
    <div className="bg-gray-900 p-8 max-w-3xl mx-auto">
      <FaqList />
    </div>
  ),
  play: async ({ canvas }) => {
    const buttons = canvas.getAllByRole('button');
    await expect(buttons.length).toBeGreaterThan(0);
    await expect(buttons[0]).toBeVisible();
  },
};

export const Expanded = {
  render: () => (
    <div className="bg-gray-900 p-8 max-w-3xl mx-auto">
      <FaqList />
    </div>
  ),
  play: async ({ canvas, userEvent }) => {
    const buttons = canvas.getAllByRole('button');
    await userEvent.click(buttons[0]);
    const answers = canvas.getAllByRole('definition');
    await expect(answers[0]).toBeVisible();
  },
};
