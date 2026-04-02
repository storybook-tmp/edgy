import { expect, userEvent, within } from "storybook/test";

import { config } from "../../.storybook/preview";

import JobsForm from "./JobsForm";

const meta = config.meta({
  title: "AI Generated/Complex/JobsForm",
  component: JobsForm,
});

export default meta;

export const Default = meta.story();

export const SuccessfulSubmission = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText("Enter your email"),
      "jobs@edgy.com",
    );
    await userEvent.click(canvas.getByRole("button", { name: "Let's do this" }));

    await expect(
      canvas.getByText("We received your request! Please check you email."),
    ).toBeVisible();
  },
});
