import type { Meta, StoryObj } from '@storybook/react-vite';
import FaqList from './FaqList';

const meta = {
  title: 'AI Generated/Complex/FaqList',
  component: FaqList,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FaqList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InNarrowContainer: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};
