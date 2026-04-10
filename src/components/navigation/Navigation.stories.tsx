import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import Navigation from './Navigation';

const meta = {
  component: Navigation,
  args: {
    loggedIn: false,
    setLoggedIn: () => undefined,
    setTriggeredLogout: () => undefined,
  },
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SignedOut: Story = {
  render: () => <NavigationHarness initialLoggedIn={false} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /sign in/i })).toHaveAttribute(
      'href',
      '/sign-in'
    );
    await expect(canvas.getByRole('link', { name: /sign up/i })).toHaveAttribute(
      'href',
      '/sign-up'
    );
    await expect(canvas.getByRole('link', { name: /pricing/i })).toHaveAttribute(
      'href',
      '/pricing'
    );
  },
};

export const SignedIn: Story = {
  render: () => <NavigationHarness initialLoggedIn={true} />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('button', { name: /sign out/i })
    ).toBeVisible();
    await expect(canvas.getByRole('link', { name: /profile/i })).toHaveAttribute(
      'href',
      '/profile'
    );
    await expect(canvas.queryByRole('link', { name: /sign in/i })).toBeNull();
  },
};

export const LogsOut: Story = {
  render: () => <NavigationHarness initialLoggedIn={true} />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /sign out/i }));

    await expect(canvas.getByText(/logout triggered/i)).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /sign in/i })
    ).toBeVisible();
  },
};

function NavigationHarness({ initialLoggedIn }: { initialLoggedIn: boolean }) {
  const [loggedIn, setLoggedIn] = React.useState(initialLoggedIn);
  const [triggeredLogout, setTriggeredLogout] = React.useState(false);

  return (
    <React.Fragment>
      <Navigation
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setTriggeredLogout={setTriggeredLogout}
      />
      <p className="bg-gray-900 px-4 py-4 text-sm text-white">
        {triggeredLogout ? 'Logout triggered' : 'Logout idle'}
      </p>
    </React.Fragment>
  );
}
