import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Testimonials from './Testimonials';

const meta = {
  component: Testimonials,
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Testimonials />,
  play: async ({ canvas }) => {
    const article = canvas.queryByRole('article');
    await expect(article).toBeInTheDocument();
  },
};
