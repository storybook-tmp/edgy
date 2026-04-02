import type { Meta, StoryObj } from '@storybook/react-vite';
import Stats from './Stats';

const meta = {
  title: 'AI Generated/Medium/Stats',
  component: Stats,
} satisfies Meta<typeof Stats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InContainer: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};
