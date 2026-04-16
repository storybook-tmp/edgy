import { expect, userEvent, within } from "storybook/test";

import Newsletter from "./Newsletter";

const meta = {
  title: "AI Generated/Complex/Newsletter",
  component: Newsletter,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = {};

export const SuccessfulSubmission = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByLabelText(/email address/i),
      "hello@example.com"
    );
    await userEvent.click(canvas.getByRole("button", { name: /notify me/i }));

    await expect(
      await canvas.findByText(/hold tight! our representative will contact/i)
    ).toBeInTheDocument();
  },
};
