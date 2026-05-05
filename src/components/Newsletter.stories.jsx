import { expect } from 'storybook/test';
import Newsletter from './Newsletter';

const meta = {
  component: Newsletter,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/sign up for our newsletter/i)).toBeVisible();
  },
};

export const SubmitSuccess = {
  play: async ({ canvas, userEvent }) => {
    const emailInput = canvas.getByPlaceholderText(/enter your email/i);
    await userEvent.type(emailInput, 'user@test.com', { delay: 20 });
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));
    await expect(await canvas.findByText(/hold tight/i)).toBeVisible();
  },
};

export const SubmitValidationError = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));
    await expect(await canvas.findByText(/empty email field/i)).toBeVisible();
  },
};
