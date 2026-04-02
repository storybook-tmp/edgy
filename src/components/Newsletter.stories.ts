import { expect, userEvent, within } from 'storybook/test';

import { config } from '../../.storybook/preview';

import Newsletter from './Newsletter';

const meta = config.meta({
  title: 'AI Generated/Complex/Newsletter',
  component: Newsletter,
  parameters: {
    layout: 'fullscreen',
  },
});

export const Default = meta.story();

export const ValidationError = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByLabelText(/email address/i),
      'not-an-email',
    );
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));

    await expect(
      canvas.getByText(/invalid email format/i),
    ).toBeInTheDocument();
  },
});

export const SuccessfulSubmit = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByLabelText(/email address/i),
      'hello@example.com',
    );
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));

    await expect(
      canvas.getByText(/representative will contact you shortly/i),
    ).toBeInTheDocument();
  },
});
