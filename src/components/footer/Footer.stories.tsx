import type { Meta, StoryObj } from '@storybook/react-vite';
import Footer from './Footer';

const meta = {
  title: 'AI Generated/Medium/Footer',
  component: Footer,
} satisfies Meta<typeof Footer>;

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
