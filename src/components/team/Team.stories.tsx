import type { Meta, StoryObj } from '@storybook/react-vite';
import Team from './Team';

const meta = {
  title: 'AI Generated/Simple/Team',
  component: Team,
} satisfies Meta<typeof Team>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InContainer: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};
