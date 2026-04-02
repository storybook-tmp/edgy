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

export default meta;

export const Default = meta.story({});

export const InvalidEmail = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter your email');
    const submitButton = canvas.getByRole('button', {
      name: 'Start free trial',
    });

    await userEvent.clear(input);
    await userEvent.type(input, 'invalid-email');
    await userEvent.click(submitButton);

    await expect(canvas.getByText('Invalid email format')).toBeInTheDocument();
  },
});
