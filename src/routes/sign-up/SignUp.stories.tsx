import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { signUpProps } from '../../../.storybook/app-runtime';
import SignUp from './SignUp';

const meta = {
  component: SignUp,
  args: signUpProps,
  parameters: {
    initialRoute: '/sign-up',
  },
  render: (args) => <SignUp {...args} />,
} satisfies Meta<typeof SignUp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ValidationErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(await canvas.findByRole('button', { name: 'Sign up' }));

    await expect(await canvas.findByText('Enter your name')).toBeInTheDocument();
    await expect(await canvas.findByText('Enter the email')).toBeInTheDocument();
  },
};

export const ExistingUser: Story = {
  args: {
    registerUser: async () => false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(await canvas.findByLabelText('Full name'), 'Jules Harper');
    await userEvent.type(
      await canvas.findByLabelText('Email address'),
      'jules@edgy.com'
    );
    await userEvent.type(await canvas.findByLabelText('Password'), 'password123');
    await userEvent.type(
      await canvas.findByLabelText('Reapeat password'),
      'password123'
    );
    await userEvent.click(await canvas.findByRole('button', { name: 'Sign up' }));

    await expect(
      await canvas.findByText(/a user with such email already exists/i)
    ).toBeInTheDocument();
  },
};
