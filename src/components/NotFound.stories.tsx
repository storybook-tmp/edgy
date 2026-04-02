import type { Meta, StoryObj } from '@storybook/react-vite';
import NotFound from './NotFound';

const meta = {
  title: 'AI Generated/Complex/NotFound',
  component: NotFound,
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InFullPage: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 min-h-screen">
        <Story />
      </div>
    ),
  ],
};
