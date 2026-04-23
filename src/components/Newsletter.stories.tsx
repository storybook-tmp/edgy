import type { Meta, StoryObj } from '@storybook/react-vite';
import Newsletter from './Newsletter';

const meta = {
  title: 'AI Generated/Complex/Newsletter',
  component: Newsletter,
} satisfies Meta<typeof Newsletter>;

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
