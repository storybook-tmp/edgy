import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import faq from "../../data/faq";
import FaqPage from "./Faq";

const meta = {
  component: FaqPage,
} satisfies Meta<typeof FaqPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("heading", { name: "Frequently Asked Questions" })
    ).toBeVisible();
    await expect(
      canvas.getByRole("button", { name: faq[0].question })
    ).toBeVisible();
  },
};

export const OpenFirstAnswer: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole("button", { name: faq[0].question })
    );

    await expect(canvas.getByText(faq[0].answer)).toBeVisible();
  },
};

export const CallToAction: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("link", { name: "Get started" })
    ).toHaveAttribute("href", "/sign-up");
  },
};
