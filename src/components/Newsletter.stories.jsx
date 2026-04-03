import { userEvent, within } from 'storybook/test';

import Newsletter from './Newsletter';

const meta = {
  component: Newsletter,
  parameters: {
    route: '/blog',
  },
};

export default meta;

export const Default = {};

export const ValidationError = {
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByLabelText(/email address/i), 'broken-email');
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));
    await canvas.findByText(/invalid email format/i);
  },
};

export const Submitted = {
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByLabelText(/email address/i),
      'stories@example.com'
    );
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));
    await canvas.findByText(/hold tight!/i);
  },
};
