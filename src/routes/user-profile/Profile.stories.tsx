import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { profileProps } from '../../../.storybook/app-runtime';
import Profile from './Profile';

const meta = {
  component: Profile,
  args: profileProps,
  parameters: {
    initialRoute: '/profile',
  },
  render: (args) => <Profile {...args} />,
} satisfies Meta<typeof Profile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DeleteConfirmation: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      await canvas.findByRole('button', { name: 'Delete account' })
    );

    await expect(
      await canvas.findByRole('heading', { name: 'Delete account' })
    ).toBeInTheDocument();
  },
};

export const ChangePasswordModal: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      await canvas.findByRole('button', { name: 'Change password' })
    );

    await expect(
      await canvas.findByRole('heading', { name: 'Edit password' })
    ).toBeInTheDocument();
  },
};
