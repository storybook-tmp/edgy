import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import Contact from './Contact';

const meta = {
  component: Contact,
  parameters: {
    initialRoute: '/contact',
  },
  render: () => <Contact />,
} satisfies Meta<typeof Contact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ValidationErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(await canvas.findByRole('button', { name: 'Submit' }));

    await expect(
      await canvas.findByText('Please enter first name!')
    ).toBeInTheDocument();
    await expect(
      await canvas.findByText('Please enter message!')
    ).toBeInTheDocument();
  },
};

export const Submitted: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstNameInput = canvasElement.querySelector(
      'input[name="firstName"]'
    ) as HTMLInputElement;
    const lastNameInput = canvasElement.querySelector(
      'input[name="lastName"]'
    ) as HTMLInputElement;
    const companyInput = canvasElement.querySelector(
      'input[name="company"]'
    ) as HTMLInputElement;
    const phoneInput = canvasElement.querySelector(
      'input[name="phone"]'
    ) as HTMLInputElement;
    const messageInput = canvasElement.querySelector(
      'textarea[name="textarea"]'
    ) as HTMLTextAreaElement;

    await userEvent.type(firstNameInput, 'Jules');
    await userEvent.type(lastNameInput, 'Harper');
    await userEvent.type(
      await canvas.findByLabelText('Email *'),
      'support@edgy.com'
    );
    await userEvent.type(companyInput, 'Edgy');
    await userEvent.type(phoneInput, '1234567890');
    await userEvent.type(messageInput, 'We want to learn more about your Instagram growth services.');
    await userEvent.click(await canvas.findByRole('button', { name: 'Submit' }));

    await expect(
      await canvas.findByText(/thank you submitting your request/i)
    ).toBeInTheDocument();
  },
};
