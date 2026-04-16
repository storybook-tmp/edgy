import type { Meta, StoryObj } from '@storybook/react-vite';
import Footer from './Footer';

const meta = {
  title: 'AI Generated/Simple/Footer',
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkBackground: Story = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827' }}>
        <Story />
      </div>
    ),
  ],
};
