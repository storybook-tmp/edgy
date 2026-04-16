import type { Meta, StoryObj } from '@storybook/react-vite';
import Testimonials from './Testimonials';

const meta = {
  title: 'AI Generated/Medium/Testimonials',
  component: Testimonials,
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FullWidth: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};
