import { expect } from 'storybook/test';
import Hero from './Hero';

const meta = {
  component: Hero,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas, userEvent }) => {
    const emailInput = canvas.getByPlaceholderText(/enter your email/i);
    await userEvent.type(emailInput, 'test@example.com', { delay: 20 });
    await userEvent.click(canvas.getByRole('button', { name: /start free trial/i }));
    await expect(await canvas.findByText(/hold tight/i)).toBeVisible();
  },
};

export const ValidationError = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /start free trial/i }));
    await expect(await canvas.findByText(/empty email field/i)).toBeVisible();
  },
};
