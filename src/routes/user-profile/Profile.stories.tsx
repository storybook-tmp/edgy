import type { Meta, StoryObj } from '@storybook/react';

import Profile from './Profile';

const noop = () => undefined;
const updateUser = async () => ({ success: true });

const meta = {
  title: 'AI Generated/Complex/Profile',
  component: Profile,
  decorators: [
    (Story) => (
      <section className="min-h-screen bg-gray-950 p-6">
        <div className="mx-auto max-w-5xl">
          <Story />
        </div>
      </section>
    ),
  ],
  args: {
    deleteUser: noop,
    setLoggedIn: noop,
    setTriggeredLogout: noop,
    updateUser,
  },
} satisfies Meta<typeof Profile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardPlan: Story = {
  args: {
    user: {
      id: 'usr_standard',
      fullname: 'Casey Morgan',
      email: 'casey@example.com',
      gender: 'Female',
      plan: 'Standard',
      password: 'supersafe123',
    },
  },
};

export const BusinessPlan: Story = {
  args: {
    user: {
      id: 'usr_business',
      fullname: 'Jordan Lee',
      email: 'jordan@example.com',
      gender: 'N/A',
      plan: 'Business',
      password: 'strongpassword456',
    },
  },
};
