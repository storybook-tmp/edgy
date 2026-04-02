import { expect, userEvent, within } from "storybook/test";

import preview from "../../../.storybook/preview";

import Hero from "./Hero";

const meta = preview.meta({
  title: "AI Generated/Complex/Hero",
  component: Hero,
});

export const Default = meta.story();

export const TrialSignupSuccess = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByPlaceholderText(/enter your email/i), "growth@edgy.com");
    await userEvent.click(canvas.getByRole("button", { name: /start free trial/i }));

    await expect(
      canvas.getByText(/hold tight! our representative will contact you shortly via email/i)
    ).toBeVisible();
  },
});
