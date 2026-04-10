import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import Footer from "./Footer";

const meta = {
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Pricing")).toBeVisible();
    await expect(canvas.getByText("About")).toBeVisible();
    await expect(canvas.getByText(/2026/i)).toBeVisible();
  },
};

export const ContactLinks: Story = {
  play: async ({ canvas }) => {
    const links = canvas.getAllByRole("link");

    await expect(
      links.some((link) => link.getAttribute("href") === "tel:+1-202-555-0186")
    ).toBe(true);
    await expect(
      links.some(
        (link) => link.getAttribute("href") === "mailto:support@edgy.com"
      )
    ).toBe(true);
  },
};

export const SocialLinks: Story = {
  play: async ({ canvas }) => {
    const links = canvas.getAllByRole("link");

    await expect(
      links.some(
        (link) =>
          link.getAttribute("href") ===
          "https://github.com/catherineisonline/edgy"
      )
    ).toBe(true);
    await expect(
      links.some(
        (link) =>
          link.getAttribute("href") ===
          "https://www.linkedin.com/in/catherinemitagvaria/"
      )
    ).toBe(true);
  },
};
