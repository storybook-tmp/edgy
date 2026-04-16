import { expect, userEvent, within } from 'storybook/test';

import Newsletter from './Newsletter';

export default {
  title: 'AI Generated/Complex/Newsletter',
  component: Newsletter,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole('heading', { name: /sign up for our newsletter/i })
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole('link', { name: /privacy policy/i })
    ).toHaveAttribute('href', '/privacy');
  },
};

export const SuccessfulSubmit = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      'team@edgy.com'
    );
    await userEvent.click(canvas.getByRole('button', { name: /notify me/i }));
    await expect(
      await canvas.findByText(/hold tight! our representative will contact you/i)
    ).toBeInTheDocument();
  },
};
