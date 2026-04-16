import { expect, userEvent, within } from "storybook/test";

import JobsForm from "./JobsForm";

const meta = {
  title: "AI Generated/Complex/JobsForm",
  component: JobsForm,
};

export default meta;

export const Default = {};

export const SuccessfulSubmission = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      "hello@example.com",
    );
    await userEvent.click(
      canvas.getByRole("button", {
        name: /let's do this/i,
      }),
    );

    await expect(
      canvas.getByText(/we received your request/i),
    ).toBeInTheDocument();
  },
};
