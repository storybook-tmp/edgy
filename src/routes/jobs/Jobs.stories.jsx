import { userEvent, within } from 'storybook/test';

import Jobs from './Jobs';

const meta = {
  component: Jobs,
  parameters: {
    route: '/jobs',
  },
};

export default meta;

export const Default = {};

export const ValidationError = {
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByLabelText(/email address/i), 'broken-email');
    await userEvent.click(canvas.getByRole('button', { name: /let's do this/i }));
    await canvas.findByText(/invalid email format/i);
  },
};

export const Submitted = {
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByLabelText(/email address/i), 'careers@example.com');
    await userEvent.click(canvas.getByRole('button', { name: /let's do this/i }));
    await canvas.findByText(/we received your request!/i);
  },
};
