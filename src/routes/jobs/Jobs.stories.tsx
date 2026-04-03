import type { Meta, StoryObj } from '@storybook/react-vite';
import Jobs from './Jobs';

const meta = {
  component: Jobs,
} satisfies Meta<typeof Jobs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
