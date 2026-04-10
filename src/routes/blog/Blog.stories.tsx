import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import blogPostsData from "../../data/blogPostsData";
import Blog from "./Blog";

const meta = {
  component: Blog,
} satisfies Meta<typeof Blog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("heading", { name: "Edgy Blog" })
    ).toBeVisible();
    await expect(canvas.getByText(blogPostsData[0].title)).toBeVisible();
  },
};

export const FeaturedPosts: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(blogPostsData[1].title)).toBeVisible();
    await expect(canvas.getByText(blogPostsData[2].title)).toBeVisible();
    await expect(
      canvas.getByRole("link", { name: new RegExp(blogPostsData[0].title, "i") })
    ).toHaveAttribute("href", blogPostsData[0].href);
  },
};

export const NewsletterSection: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("heading", { name: "Sign up for our newsletter" })
    ).toBeVisible();
    await expect(
      canvas.getByRole("link", { name: "Privacy Policy." })
    ).toHaveAttribute("href", "/privacy");
  },
};
