import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, waitFor } from "storybook/test";

import Newsletter from "./Newsletter";

const meta = {
  component: Newsletter,
} satisfies Meta<typeof Newsletter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("heading", { name: "Sign up for our newsletter" })
    ).toBeVisible();
    await expect(
      canvas.getByRole("button", { name: "Notify me" })
    ).toBeVisible();
  },
};

export const ValidationError: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(
      canvas.getByPlaceholderText("Enter your email"),
      "not-an-email"
    );
    await userEvent.click(canvas.getByRole("button", { name: "Notify me" }));

    await expect(canvas.getByText("Invalid email format")).toBeVisible();
  },
};

export const SuccessfulSignup: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(
      canvas.getByPlaceholderText("Enter your email"),
      "reader@edgy.com"
    );
    await userEvent.click(canvas.getByRole("button", { name: "Notify me" }));

    await waitFor(async () => {
      await expect(
        canvas.getByText(/our representative will contact you shortly/i)
      ).toBeVisible();
    });
  },
};
