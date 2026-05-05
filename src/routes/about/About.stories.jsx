import { expect } from 'storybook/test';
import About from './About';

const meta = {
  component: About,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Meet Our Team')).toBeVisible();
    await expect(canvas.getByText('Ready to dive in?')).toBeVisible();
  },
};
