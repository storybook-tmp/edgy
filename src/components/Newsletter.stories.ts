import { expect, userEvent, within } from 'storybook/test';

import preview from '../../.storybook/preview';

import Newsletter from './Newsletter';

const meta = preview.meta({
  title: 'AI Generated/Complex/Newsletter',
  component: Newsletter,
});

export const EmptySubmission = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));

    await expect(canvas.getByText('Empty email field')).toBeVisible();
  },
});

export const SuccessfulSubscription = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByLabelText(/email address/i),
      'reader@example.com'
    );
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));

    await expect(
      canvas.getByText(/hold tight! our representative will contact you shortly/i)
    ).toBeVisible();
  },
});
