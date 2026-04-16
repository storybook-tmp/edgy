import type { Meta, StoryObj } from '@storybook/react-vite';
import FaqList from './FaqList';

const meta = {
  title: 'AI Generated/Medium/FaqList',
  component: FaqList,
} satisfies Meta<typeof FaqList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Contained: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px', backgroundColor: '#111827' }}>
        <Story />
      </div>
    ),
  ],
};
