import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import Jobs from './Jobs';

const meta = {
  component: Jobs,
  parameters: {
    routePath: '/jobs',
  },
} satisfies Meta<typeof Jobs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /jobs/i })).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: /let's do this/i })
    ).toBeVisible();
    await expect(
      canvas.getByText(/ready to advance your career\?/i)
    ).toBeVisible();
  },
};

export const ValidationError: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole('button', { name: /let's do this/i })
    );

    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};

export const SuccessfulSubmission: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      'jobs@edgy.com'
    );
    await userEvent.click(
      canvas.getByRole('button', { name: /let's do this/i })
    );

    await waitFor(async () => {
      await expect(
        canvas.getByText(/we received your request!/i)
      ).toBeVisible();
    });
  },
};
