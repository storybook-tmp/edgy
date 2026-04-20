import { expect, waitFor } from 'storybook/test';
import Newsletter from './Newsletter';

const meta = {
  component: Newsletter,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /sign up for our newsletter/i })
    ).toBeVisible();
    await expect(canvas.getByLabelText(/email address/i)).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: /notify me/i })
    ).toBeEnabled();
  },
};

export const EmptyEmailValidation = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));

    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};

export const SuccessfulSignup = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(
      canvas.getByLabelText(/email address/i),
      'subscriber@edgy.com'
    );
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));

    await waitFor(async () => {
      await expect(
        canvas.getByText(/our representative will contact you shortly/i)
      ).toBeVisible();
    });
  },
};
