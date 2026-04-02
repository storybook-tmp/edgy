import { config } from '#.storybook/preview';
import { expect, userEvent, within } from 'storybook/test';

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
      canvas.getByPlaceholderText('Enter your email'),
      'hello@example.com',
    );
    await userEvent.click(
      canvas.getByRole('button', { name: 'Start free trial' }),
    );

    await expect(
      canvas.getByText(/Hold tight! Our representative will contact you shortly/i),
    ).toBeVisible();
  },
});
