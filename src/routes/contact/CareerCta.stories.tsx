import type { Meta, StoryObj } from '@storybook/react-vite';
import CareerCta from './CareerCta';

const meta = {
  title: 'AI Generated/Medium/CareerCta',
  component: CareerCta,
} satisfies Meta<typeof CareerCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDarkBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900">
        <Story />
      </div>
    ),
  ],
};
