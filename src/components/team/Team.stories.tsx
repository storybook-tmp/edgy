import type { Meta, StoryObj } from '@storybook/react-vite';
import Team from './Team';

const meta = {
  title: 'AI Generated/Medium/Team',
  component: Team,
} satisfies Meta<typeof Team>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkBackground: Story = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827' }}>
        <Story />
      </div>
    ),
  ],
};
