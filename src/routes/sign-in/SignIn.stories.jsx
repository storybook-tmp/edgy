import { fn, userEvent, within } from 'storybook/test';

import SignIn from './SignIn';

const meta = {
  component: SignIn,
  args: {
    retrieveDatabase: async () => true,
    setLoggedIn: fn(),
    user: null,
  },
  parameters: {
    route: '/sign-in',
  },
};

export default meta;

export const Default = {};

export const ValidationErrors = {
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByPlaceholderText(/email address/i), 'wrong');
    await userEvent.type(canvas.getByPlaceholderText(/password/i), 'short');
    await userEvent.click(canvas.getByRole('button', { name: /^sign in$/i }));
    await canvas.findByText(/invalid email/i);
  },
};

export const WrongPassword = {
  args: {
    retrieveDatabase: async () => false,
  },
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText(/email address/i),
      'jordan@example.com'
    );
    await userEvent.type(canvas.getByPlaceholderText(/password/i), 'password123');
    await userEvent.click(canvas.getByRole('button', { name: /^sign in$/i }));
    await canvas.findByText(/wrong email\/password/i);
  },
};
