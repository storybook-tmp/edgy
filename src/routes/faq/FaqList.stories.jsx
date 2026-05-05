import { expect } from 'storybook/test';
import FaqList from './FaqList';

const meta = {
  component: FaqList,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas, userEvent }) => {
    const firstQuestion = canvas.getByText(/how does edgy work/i);
    await expect(firstQuestion).toBeVisible();
    await userEvent.click(firstQuestion);
    await expect(await canvas.findByText(/we work diligently/i)).toBeVisible();
  },
};
