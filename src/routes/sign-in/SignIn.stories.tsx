import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { signInProps } from '../../../.storybook/app-runtime';
import SignIn from './SignIn';

const meta = {
  component: SignIn,
  args: signInProps,
  parameters: {
    initialRoute: '/sign-in',
  },
  render: (args) => <SignIn {...args} />,
} satisfies Meta<typeof SignIn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ValidationErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(await canvas.findByRole('button', { name: 'Sign in' }));

    await expect(await canvas.findByText('Enter your email')).toBeInTheDocument();
    await expect(
      await canvas.findByText("Password field shouldn't be empty")
    ).toBeInTheDocument();
  },
};

export const InvalidCredentials: Story = {
  args: {
    ...signInProps,
    retrieveDatabase: async () => false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      await canvas.findByPlaceholderText('Email address'),
      'wrong@edgy.com'
    );
    await userEvent.type(
      await canvas.findByPlaceholderText('Password'),
      'password123'
    );
    await userEvent.click(await canvas.findByRole('button', { name: 'Sign in' }));

    await expect(
      await canvas.findByText(/doesn't exist or you entered a wrong email\/password/i)
    ).toBeInTheDocument();
  },
};
