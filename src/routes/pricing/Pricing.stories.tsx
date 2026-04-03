import type { Meta, StoryObj } from '@storybook/react-vite';
import Pricing from './Pricing';

const meta = {
  component: Pricing,
} satisfies Meta<typeof Pricing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Pricing loggedIn={false} />,
};

export const LoggedIn: Story = {
  render: () => <Pricing loggedIn={true} />,
};
