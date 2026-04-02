import type { Meta, StoryObj } from '@storybook/react-vite';
import FaqList from './FaqList';

const meta = {
  title: 'AI Generated/Complex/FaqList',
  component: FaqList,
} satisfies Meta<typeof FaqList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FullWidth: Story = {
  parameters: {
    layout: 'fullscreen',
  },
};
