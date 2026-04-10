import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import App from './App';
import { storybookUserSession } from '../.storybook/msw-handlers';

const meta = {
  component: App,
  parameters: {
    useMemoryRouter: false,
  },
  render: () => <App />,
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LandingRoute: Story = {
  parameters: {
    windowLocationPathname: '/',
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /your instagram growth secret/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /sign in/i })
    ).toHaveAttribute('href', '/sign-in');
  },
};

export const SignInSuccess: Story = {
  parameters: {
    windowLocationPathname: '/sign-in',
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(
      canvas.getByPlaceholderText(/email address/i),
      'member@edgy.com'
    );
    await userEvent.type(
      canvas.getByPlaceholderText(/password/i),
      'Password123'
    );
    await userEvent.click(canvas.getByRole('button', { name: /sign in/i }));

    await waitFor(async () => {
      await expect(
        canvas.getByRole('heading', { name: /profile information/i })
      ).toBeVisible();
    });
  },
};

export const RestoredSession: Story = {
  parameters: {
    windowLocationPathname: '/profile',
    storybookSessionStorage: {
      loggedIn: 'true',
      user: JSON.stringify(storybookUserSession),
    },
  },
  play: async ({ canvas, userEvent }) => {
    await expect(
      canvas.getByRole('heading', { name: /profile information/i })
    ).toBeVisible();
    await expect(canvas.getByText(/member@edgy.com/i)).toBeVisible();

    await userEvent.click(canvas.getByRole('button', { name: /sign out/i }));

    await waitFor(async () => {
      await expect(
        canvas.getByRole('heading', { name: /your instagram growth secret/i })
      ).toBeVisible();
    });
  },
};
