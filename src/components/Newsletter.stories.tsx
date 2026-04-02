import { expect, userEvent, within } from 'storybook/test';

import { config } from '#.storybook/preview';

import Newsletter from './Newsletter';

const meta = config.meta({
  title: 'AI Generated/Complex/Newsletter',
  component: Newsletter,
});

export const Default = meta.story();

export const ValidationError = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));

    await expect(canvas.getByText(/empty email field/i)).toBeInTheDocument();
  },
});
