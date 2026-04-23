import { expect, userEvent, within } from "storybook/test";

import { config } from "../../../.storybook/preview";

import Hero from "./Hero";

const meta = config.meta({
  title: "AI Generated/Complex/Hero",
  component: Hero,
});

export default meta;

export const Default = meta.story();

export const Submitted = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText(/enter your email/i),
      "hello@example.com",
    );
    await userEvent.click(canvas.getByRole("button", { name: /start free trial/i }));

    await expect(
      canvas.getByText(/representative will contact you shortly via email/i),
    ).toBeVisible();
  },
});
