import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import Contact from './Contact';

const meta = {
  component: Contact,
  parameters: {
    routePath: '/contact',
  },
} satisfies Meta<typeof Contact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /let's work together/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: /submit/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /see open positions/i })
    ).toBeVisible();
  },
};

export const ValidationErrors: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /submit/i }));

    await expect(canvas.getByText(/please enter first name/i)).toBeVisible();
    await expect(canvas.getByText(/please enter last name/i)).toBeVisible();
    await expect(canvas.getByText(/please enter email/i)).toBeVisible();
    await expect(canvas.getByText(/please enter company/i)).toBeVisible();
    await expect(canvas.getByText(/please enter phone number/i)).toBeVisible();
    await expect(canvas.getByText(/please enter message/i)).toBeVisible();
  },
};

export const SuccessfulSubmission: Story = {
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.type(getField(canvasElement, 'firstName'), 'Catherine');
    await userEvent.type(getField(canvasElement, 'lastName'), 'Black');
    await userEvent.type(
      canvas.getByLabelText(/^email \*$/i),
      'catherine@edgy.com'
    );
    await userEvent.type(canvas.getByLabelText(/company/i), 'Edgy');
    await userEvent.type(getField(canvasElement, 'phone'), '123456789');
    await userEvent.type(
      getTextarea(canvasElement, 'textarea'),
      'I would like to learn more about the premium plan.'
    );
    await userEvent.click(canvas.getByLabelText(/verify recaptcha/i));
    await userEvent.click(canvas.getByRole('button', { name: /submit/i }));

    await waitFor(async () => {
      await expect(
        canvas.getByText(/thank you submitting your request/i)
      ).toBeVisible();
    });
  },
};

function getField(canvasElement: HTMLElement, fieldName: string) {
  const field = canvasElement.querySelector<HTMLInputElement>(
    `input[name="${fieldName}"]`
  );

  if (!field) {
    throw new Error(`Unable to find the ${fieldName} input.`);
  }

  return field;
}

function getTextarea(canvasElement: HTMLElement, fieldName: string) {
  const field = canvasElement.querySelector<HTMLTextAreaElement>(
    `textarea[name="${fieldName}"]`
  );

  if (!field) {
    throw new Error(`Unable to find the ${fieldName} textarea.`);
  }

  return field;
}
