import type { Meta, StoryObj } from '@storybook/react-vite';
import Testimonials from './Testimonials';

const meta = {
  title: 'AI Generated/Simple/Testimonials',
  component: Testimonials,
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InDarkContainer: Story = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827' }}>
        <Story />
      </div>
    ),
  ],
};
