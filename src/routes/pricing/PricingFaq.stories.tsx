import type { Meta, StoryObj } from '@storybook/react-vite';
import PricingFaq from './PricingFaq';

const meta = {
  title: 'AI Generated/Simple/PricingFaq',
  component: PricingFaq,
} satisfies Meta<typeof PricingFaq>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900">
        <Story />
      </div>
    ),
  ],
};
