import { userEvent, within } from 'storybook/test';

import Contact from './Contact';

const meta = {
  component: Contact,
  parameters: {
    route: '/contact',
  },
};

export default meta;

export const Default = {};

export const ValidationErrors = {
  async play({ canvasElement }) {
    const canvas = within(canvasElement);
    const firstNameInput = canvasElement.querySelector('#first-name');
    const lastNameInput = canvasElement.querySelector('#last-name');
    const helpTextarea = canvasElement.querySelector('#how-can-we-help');

    await userEvent.type(firstNameInput, 'Jo');
    await userEvent.type(lastNameInput, 'Li');
    await userEvent.type(canvas.getByLabelText(/^email/i), 'broken-email');
    await userEvent.type(canvas.getByLabelText(/company/i), 'Ed');
    await userEvent.type(canvas.getByLabelText(/phone/i), 'abc');
    await userEvent.type(helpTextarea, 'short');
    await userEvent.click(canvas.getByRole('button', { name: /submit/i }));
    await canvas.findByText(/please enter valid email!/i);
  },
};

export const Submitted = {
  async play({ canvasElement }) {
    const canvas = within(canvasElement);
    const firstNameInput = canvasElement.querySelector('#first-name');
    const lastNameInput = canvasElement.querySelector('#last-name');
    const helpTextarea = canvasElement.querySelector('#how-can-we-help');

    await userEvent.type(firstNameInput, 'Jordan');
    await userEvent.type(lastNameInput, 'Lee');
    await userEvent.type(canvas.getByLabelText(/^email/i), 'jordan@example.com');
    await userEvent.type(canvas.getByLabelText(/company/i), 'Edgy');
    await userEvent.type(canvas.getByLabelText(/phone/i), '2025550186');
    await userEvent.type(helpTextarea, 'We would love help planning our next growth campaign.');
    await userEvent.click(canvas.getByRole('button', { name: /submit/i }));
    await canvas.findByText(/thank you submitting your request/i);
  },
};
