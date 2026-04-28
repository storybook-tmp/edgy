import preview from '../../../.storybook/preview';
import { expect } from 'storybook/test';
import Hero from './Hero';

const meta = preview.meta({
  component: Hero,
  tags: ['ai-generated'],
});

export default meta;

export const Default = meta.story({
  render: () => <Hero />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Edgy')).toBeVisible();
    await expect(
      canvas.getByText('your Instagram growth secret')
    ).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: /start free trial/i })
    ).toBeVisible();
  },
});

export const WithEmailValidation = meta.story({
  render: () => <Hero />,
  play: async ({ canvas, userEvent }) => {
    const submitButton = canvas.getByRole('button', { name: /start free trial/i });
    await userEvent.click(submitButton);
    await expect(canvas.getByText('Empty email field')).toBeVisible();
  },
});

export const WithInvalidEmail = meta.story({
  render: () => <Hero />,
  play: async ({ canvas, userEvent }) => {
    const emailInput = canvas.getByPlaceholderText('Enter your email');
    await userEvent.type(emailInput, 'invalid-email');
    const submitButton = canvas.getByRole('button', { name: /start free trial/i });
    await userEvent.click(submitButton);
    await expect(canvas.getByText('Invalid email format')).toBeVisible();
  },
});
