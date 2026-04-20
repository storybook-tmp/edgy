import { expect, waitFor } from 'storybook/test';
import JobsForm from './JobsForm';

const meta = {
  component: JobsForm,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /ready to advance your career/i })
    ).toBeVisible();
    await expect(canvas.getByLabelText(/email address/i)).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: /let.*do this/i })
    ).toBeEnabled();
  },
};

export const InvalidEmail = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByLabelText(/email address/i), 'not-an-email');
    await userEvent.click(canvas.getByRole('button', { name: /let.*do this/i }));

    await expect(canvas.getByText(/invalid email format/i)).toBeVisible();
  },
};

export const SuccessfulRequest = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByLabelText(/email address/i), 'jobs@edgy.com');
    await userEvent.click(canvas.getByRole('button', { name: /let.*do this/i }));

    await waitFor(async () => {
      await expect(canvas.getByText(/we received your request/i)).toBeVisible();
    });
  },
};
