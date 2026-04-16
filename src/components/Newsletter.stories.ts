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

export default meta;

export const Default = meta.story({});

export const SuccessfulSignup = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter your email');
    const submitButton = canvas.getByRole('button', {
      name: 'Notify me',
    });

    await userEvent.clear(input);
    await userEvent.type(input, 'team@edgy.com');
    await userEvent.click(submitButton);

    await expect(
      canvas.getByText('Hold tight! Our representative will contact you shortly via email')
    ).toBeInTheDocument();
  },
});
