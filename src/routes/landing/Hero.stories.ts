import { expect, userEvent, within } from 'storybook/test';

import { config } from '../../../.storybook/preview';

import Hero from './Hero';

const meta = config.meta({
  title: 'AI Generated/Complex/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
});

export const Default = meta.story();

export const ValidationError = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      'missing-at-symbol',
    );
    await userEvent.click(
      canvas.getByRole('button', { name: /start free trial/i }),
    );

    await expect(
      canvas.getByText(/invalid email format/i),
    ).toBeInTheDocument();
  },
});

export const SuccessfulSubmit = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      'growth@example.com',
    );
    await userEvent.click(
      canvas.getByRole('button', { name: /start free trial/i }),
    );

    await expect(
      canvas.getByText(/representative will contact you shortly/i),
    ).toBeInTheDocument();
  },
});
