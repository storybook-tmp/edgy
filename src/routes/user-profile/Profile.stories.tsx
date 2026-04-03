import type { Meta, StoryObj } from '@storybook/react-vite';
import Profile from './Profile';

const meta = {
  component: Profile,
  args: {
    deleteUser: () => undefined,
    setLoggedIn: () => undefined,
    setTriggeredLogout: () => undefined,
    updateUser: async () => ({ success: true }),
    user: {
      id: 'rec_storybook_user',
      createdTime: '2026-03-15',
      email: 'jules@edgy.test',
      fullname: 'Jules Storybook',
      gender: 'Female',
      password: 'storybook123',
      plan: 'Premium',
    },
  },
  parameters: {
    storybookApp: {
      route: '/profile',
      session: 'member',
    },
  },
} satisfies Meta<typeof Profile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CompleteProfile: Story = {};

export const NeedsSetup: Story = {
  args: {
    user: {
      id: 'rec_storybook_user',
      createdTime: '2026-03-15',
      email: 'jules@edgy.test',
      fullname: 'Jules Storybook',
      gender: '',
      password: 'storybook123',
      plan: '',
    },
  },
};

export const BusinessPlanProfile: Story = {
  args: {
    user: {
      id: 'rec_storybook_user',
      createdTime: '2026-03-15',
      email: 'ops@edgy.test',
      fullname: 'Operations Team',
      gender: 'N/A',
      password: 'storybook123',
      plan: 'Business',
    },
  },
};
