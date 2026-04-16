import type { Meta, StoryObj } from '@storybook/react-vite';
import Footer from './Footer';

const meta = {
  title: 'AI Generated/Medium/Footer',
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InPage: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 min-h-screen flex flex-col justify-end">
        <Story />
      </div>
    ),
  ],
};
