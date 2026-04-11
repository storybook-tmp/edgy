import { expect } from 'storybook/test';
import Profile from './Profile';

const mockUser = {
  id: 'rec123abc',
  createdTime: '2024-01-15',
  email: 'jane.doe@example.com',
  fullname: 'Jane Doe',
  gender: 'Female',
  plan: 'Premium',
  password: 'hashedpassword123',
};

export default {
  component: Profile,
};

export const Default = {
  render: () => (
    <Profile
      user={mockUser}
      updateUser={async () => ({ success: true })}
      deleteUser={() => {}}
      setLoggedIn={() => {}}
      setTriggeredLogout={() => {}}
    />
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /profile information/i })).toBeVisible();
    await expect(canvas.getByText('Jane Doe')).toBeVisible();
    await expect(canvas.getByText('jane.doe@example.com')).toBeVisible();
  },
};

export const WithPlanAndGender = {
  render: () => (
    <Profile
      user={mockUser}
      updateUser={async () => ({ success: true })}
      deleteUser={() => {}}
      setLoggedIn={() => {}}
      setTriggeredLogout={() => {}}
    />
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Female')).toBeVisible();
    await expect(canvas.getByText('Premium')).toBeVisible();
  },
};

export const DeleteAccountModal = {
  render: () => (
    <Profile
      user={mockUser}
      updateUser={async () => ({ success: true })}
      deleteUser={() => {}}
      setLoggedIn={() => {}}
      setTriggeredLogout={() => {}}
    />
  ),
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /delete account/i }));
    await expect(canvas.getByText(/are you sure you want to delete your account/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: /cancel/i })).toBeVisible();
  },
};

export const ChangePasswordModal = {
  render: () => (
    <Profile
      user={mockUser}
      updateUser={async () => ({ success: true })}
      deleteUser={() => {}}
      setLoggedIn={() => {}}
      setTriggeredLogout={() => {}}
    />
  ),
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /change password/i }));
    await expect(canvas.getByText(/edit password/i)).toBeVisible();
    await expect(canvas.getByLabelText(/new password/i)).toBeVisible();
    await expect(canvas.getByLabelText(/repeat password/i)).toBeVisible();
  },
};
