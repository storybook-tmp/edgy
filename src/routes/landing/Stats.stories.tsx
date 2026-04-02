import type { Meta, StoryObj } from '@storybook/react-vite';
import Stats from './Stats';

const meta = {
  title: 'AI Generated/Medium/Stats',
  component: Stats,
} satisfies Meta<typeof Stats>;

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
