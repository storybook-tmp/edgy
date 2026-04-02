import { expect, fn, userEvent, within } from 'storybook/test';

import preview from '../../../.storybook/preview';

import Profile from './Profile';

const meta = preview.meta({
  title: 'AI Generated/Complex/Profile',
  component: Profile,
  args: {
    deleteUser: fn(),
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
    updateUser: fn(),
    user: {
      email: 'avery@example.com',
      fullname: 'Avery Carter',
      gender: 'Female',
      id: 'usr_001',
      password: 'password123',
      plan: 'Premium',
    },
  },
});

export const Overview = meta.story({});

export const DeleteConfirmation = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole('button', { name: /delete account/i })
    );

    await expect(
      canvas.getByRole('heading', { name: /delete account/i })
    ).toBeVisible();
    await expect(
      canvas.getByText(/this action is irreversible/i)
    ).toBeVisible();
  },
});
