import { expect, userEvent, within } from 'storybook/test';

import { config } from '#.storybook/preview';

import Hero from './Hero';

const meta = config.meta({
  title: 'AI Generated/Complex/Hero',
  component: Hero,
});

export const Default = meta.story();

export const SuccessfulSubmission = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      'story@example.com'
    );
    await userEvent.click(
      canvas.getByRole('button', { name: /start free trial/i })
    );

    await expect(
      canvas.getByText(/hold tight! our representative will contact you shortly/i)
    ).toBeInTheDocument();
  },
});
