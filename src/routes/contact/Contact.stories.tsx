import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import Contact from './Contact';

const meta = {
  component: Contact,
} satisfies Meta<typeof Contact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /let's work together/i })
    ).toBeVisible();
    await expect(
      canvas.getByLabelText(/storybook captcha/i)
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /see open positions/i })
    ).toHaveAttribute('href', '/jobs');
  },
};

export const ValidationErrors: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /submit/i }));

    await expect(canvas.getByText(/please enter first name!/i)).toBeVisible();
    await expect(canvas.getByText(/please enter last name!/i)).toBeVisible();
    await expect(canvas.getByText(/please enter email!/i)).toBeVisible();
    await expect(canvas.getByText(/please enter message!/i)).toBeVisible();
  },
};

export const SuccessfulSubmission: Story = {
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.type(
      getField<HTMLInputElement>(canvasElement, '[name="firstName"]'),
      'Catherine'
    );
    await userEvent.type(
      getField<HTMLInputElement>(canvasElement, '[name="lastName"]'),
      'Black'
    );
    await userEvent.type(canvas.getByLabelText(/^email/i), 'team@edgy.com');
    await userEvent.type(canvas.getByLabelText(/company/i), 'Edgy');
    await userEvent.type(canvas.getByLabelText(/phone/i), '+1 202 555 0186');
    await userEvent.type(
      getField<HTMLTextAreaElement>(canvasElement, '[name="textarea"]'),
      'We need a growth plan for our new launch.'
    );
    await userEvent.click(canvas.getByRole('button', { name: /submit/i }));

    await expect(
      await canvas.findByText(/thank you submitting your request/i)
    ).toBeVisible();
  },
};

function getField<TElement extends Element>(
  container: HTMLElement,
  selector: string
) {
  const field = container.querySelector<TElement>(selector);

  if (!field) {
    throw new Error(`Could not find form field: ${selector}`);
  }

  return field;
}
