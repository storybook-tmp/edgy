import type { Meta, StoryObj } from '@storybook/react-vite';
import NotFound from './NotFound';

const meta = {
  title: 'AI Generated/Simple/NotFound',
  component: NotFound,
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDarkBackground: Story = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827' }}>
        <Story />
      </div>
    ),
  ],
};
