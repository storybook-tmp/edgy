import type { Meta, StoryObj } from '@storybook/react-vite';
import Partners from './Partners';

const meta = {
  title: 'AI Generated/Simple/Partners',
  component: Partners,
} satisfies Meta<typeof Partners>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Visible: Story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};
