import type { Meta, StoryObj } from '@storybook/react-vite';
import Stats from './Stats';

const meta = {
  title: 'AI Generated/Simple/Stats',
  component: Stats,
} satisfies Meta<typeof Stats>;

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
