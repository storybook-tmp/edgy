import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import pricingFaq from "../../data/pricingFaq";
import { pricingTiers } from "../../data/pricingTiers";
import Pricing from "./Pricing";

const meta = {
  component: Pricing,
  args: {
    loggedIn: false,
  },
} satisfies Meta<typeof Pricing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOutPlans: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("heading", { name: "Instagram Growth Plans" })
    ).toBeVisible();
    await expect(
      canvas.getAllByRole("link", {
        name: new RegExp(`Buy ${pricingTiers[0].name}`, "i"),
      })[0]
    ).toHaveAttribute("href", "/sign-up");
  },
};

export const LoggedInPlans: Story = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getAllByText(pricingTiers[1].description).length).toBe(
      2
    );
    await expect(
      canvas.getAllByRole("link", {
        name: new RegExp(`Buy ${pricingTiers[1].name}`, "i"),
      })[0]
    ).toHaveAttribute("href", "/profile");
  },
};

export const FrequentlyAskedQuestions: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("heading", { name: "Frequently Asked Questions" })
    ).toBeVisible();
    await expect(canvas.getByText(pricingFaq[0].question)).toBeVisible();
    await expect(canvas.getByText(pricingFaq[0].answer)).toBeVisible();
  },
};
