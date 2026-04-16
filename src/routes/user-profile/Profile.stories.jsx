import { fn, userEvent, within } from 'storybook/test';

import { storybookUser } from '../../../.storybook/env';
import Profile from './Profile';

const meta = {
  component: Profile,
  args: {
    deleteUser: fn(),
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
    updateUser: async () => ({ success: true }),
    user: storybookUser,
  },
  parameters: {
    route: '/profile',
    session: 'authenticated',
  },
};

export default meta;

export const Default = {};

export const DeleteConfirmation = {
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole('button', { name: /delete account/i })
    );
    await canvas.findByText(/are you sure you want to delete your account/i);
  },
};

export const ChangePassword = {
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole('button', { name: /change password/i })
    );
    await canvas.findByText(/edit password/i);
  },
};
