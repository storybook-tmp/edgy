import type { Meta, StoryObj } from '@storybook/react-vite';
import ContactImg from './ContactImg';

const meta = {
  title: 'AI Generated/Simple/ContactImg',
  component: ContactImg,
} satisfies Meta<typeof ContactImg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InContainer: Story = {
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', height: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
