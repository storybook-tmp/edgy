import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Landing from './Landing';

const meta = {
  component: Landing,
  args: {
    loggedIn: false,
  },
  parameters: {
    initialEntries: ['/'],
  },
} satisfies Meta<typeof Landing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOutLanding: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /your instagram growth secret/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: /start free trial/i })
    ).toBeVisible();
  },
};

export const LeadCaptureValidation: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole('button', { name: /start free trial/i })
    );

    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};

export const LoggedInCtas: Story = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvas }) => {
    const getStartedLinks = canvas.getAllByRole('link', { name: /get started/i });

    await expect(getStartedLinks[0]).toHaveAttribute('href', '/profile');
    await expect(
      canvas.getByRole('heading', { name: /instagram growth plans/i })
    ).toBeVisible();
  },
};
