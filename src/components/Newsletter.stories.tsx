import type { Meta, StoryObj } from '@storybook/react-vite';
import Newsletter from './Newsletter';

const meta = {
  title: 'AI Generated/Complex/Newsletter',
  component: Newsletter,
} satisfies Meta<typeof Newsletter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithinContainer: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};
