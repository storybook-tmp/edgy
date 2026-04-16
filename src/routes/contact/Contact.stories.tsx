import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import Contact from './Contact';

const meta = {
  component: Contact,
  parameters: {
    initialEntries: ['/contact'],
  },
} satisfies Meta<typeof Contact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /let's work together/i })
    ).toBeVisible();
    await expect(canvas.getByText(/storybook recaptcha/i)).toBeVisible();
  },
};

export const ValidationErrors: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /submit/i }));

    await expect(canvas.getByText(/please enter first name/i)).toBeVisible();
    await expect(canvas.getByText(/please enter message/i)).toBeVisible();
  },
};

export const SuccessfulSubmit: Story = {
  play: async ({ canvas, userEvent }) => {
    const textboxes = canvas.getAllByRole('textbox');

    await userEvent.type(textboxes[0], 'Taylor');
    await userEvent.type(textboxes[1], 'Brooks');
    await userEvent.type(textboxes[2], 'member@edgy.com');
    await userEvent.type(textboxes[3], 'Edgy Labs');
    await userEvent.type(textboxes[4], '123456789');
    await userEvent.type(textboxes[5], 'We would like to discuss a new campaign strategy.');
    await userEvent.click(canvas.getByRole('button', { name: /submit/i }));

    await waitFor(async () => {
      await expect(
        canvas.getByText(/thank you submitting your request/i)
      ).toBeVisible();
    });
  },
};
