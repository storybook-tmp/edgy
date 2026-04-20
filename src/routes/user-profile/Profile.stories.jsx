import { expect, fn, waitFor } from 'storybook/test';
import Profile from './Profile';

const storybookUser = {
  id: 'rec_storybook_user',
  createdTime: '2026-04-20',
  email: 'ada@edgy.com',
  fullname: 'Ada Story',
  gender: 'N/A',
  plan: 'Premium',
  password: 'storybook-password',
};

const meta = {
  component: Profile,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    user: storybookUser,
    updateUser: async () => ({ success: true }),
    deleteUser: fn(),
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /profile information/i })
    ).toBeVisible();
    await expect(canvas.getByText(/ada@edgy\.com/i)).toBeVisible();
    await expect(canvas.getByText(/premium/i)).toBeVisible();
  },
};

export const DeleteConfirmation = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole('button', { name: /delete account/i })
    );

    await expect(canvas.getByText(/permanent removal of all your data/i)).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: /cancel/i }));

    await waitFor(async () => {
      await expect(
        canvas.queryByText(/permanent removal of all your data/i)
      ).not.toBeInTheDocument();
    });
  },
};

export const PasswordValidation = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole('button', { name: /change password/i })
    );
    await expect(
      canvas.getByRole('heading', { name: /edit password/i })
    ).toBeVisible();
    await userEvent.click(
      canvas.getAllByRole('button', { name: /^change password$/i })[1]
    );

    await expect(canvas.getByText(/password fields are empty/i)).toBeVisible();
  },
};

export const FullNameValidation = {
  play: async ({ canvas, userEvent }) => {
    const fullNameRow = canvas.getByText('Ada Story').closest('dd');
    const editButton = fullNameRow?.querySelector('svg');

    await expect(editButton).toBeDefined();
    await userEvent.click(editButton);
    await userEvent.click(canvas.getByRole('button', { name: /save/i }));

    await expect(canvas.getByText(/this field is required/i)).toBeVisible();
  },
};
