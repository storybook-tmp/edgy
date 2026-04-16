import { expect, userEvent, within } from "storybook/test";

import preview from "../../.storybook/preview";

import JobsForm from "./JobsForm";

const meta = preview.meta({
  title: "AI Generated/Complex/JobsForm",
  component: JobsForm,
});

export const Default = meta.story();

export const SuccessfulSubmission = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByRole("textbox", { name: /email address/i }), "talent@edgy.com");
    await userEvent.click(canvas.getByRole("button", { name: /let's do this/i }));

    await expect(
      canvas.getByText(/we received your request! please check you email\./i)
    ).toBeVisible();
  },
});
