import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Partners from './Partners';

const meta = {
  component: Partners,
} satisfies Meta<typeof Partners>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Partners />,
  play: async ({ canvas }) => {
    const links = canvas.queryAllByRole('link');
    await expect(links.length).toBeGreaterThan(0);
  },
};
