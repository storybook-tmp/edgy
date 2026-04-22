import { expect } from 'storybook/test';
import FaqList from './FaqList';

const meta = {
  component: FaqList,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  render: () => <FaqList />,
  play: async ({ canvas }) => {
    const buttons = canvas.getAllByRole('button');
    await expect(buttons.length).toBeGreaterThan(0);
  },
};

export const ExpandedItem = {
  render: () => <FaqList />,
  play: async ({ canvas, userEvent }) => {
    const buttons = canvas.getAllByRole('button');
    await expect(buttons[0]).toBeVisible();
    await userEvent.click(buttons[0]);
    const panels = canvas.getAllByRole('definition');
    await expect(panels[0]).toBeVisible();
  },
};

export const MultipleItems = {
  render: () => <FaqList />,
  play: async ({ canvas }) => {
    const buttons = canvas.getAllByRole('button');
    await expect(buttons.length).toBeGreaterThan(1);
  },
};
