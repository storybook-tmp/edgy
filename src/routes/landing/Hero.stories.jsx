import { expect, waitFor } from 'storybook/test';
import Hero from './Hero';

const meta = {
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Edgy')).toBeVisible();
    await expect(
      canvas.getByText(/your Instagram growth secret/i)
    ).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: /start free trial/i })
    ).toBeEnabled();
  },
};

export const EmptyTrialEmail = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole('button', { name: /start free trial/i })
    );

    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};

export const SuccessfulTrial = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      'trial@edgy.com'
    );
    await userEvent.click(
      canvas.getByRole('button', { name: /start free trial/i })
    );

    await waitFor(async () => {
      await expect(
        canvas.getByText(/our representative will contact you shortly/i)
      ).toBeVisible();
    });
  },
};
