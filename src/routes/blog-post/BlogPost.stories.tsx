import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, waitFor } from "storybook/test";

import blogPostsData from "../../data/blogPostsData";
import BlogPost from "./BlogPost";

const meta = {
  component: BlogPost,
  render: () => <BlogPost />,
} satisfies Meta<typeof BlogPost>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InstagramBlogGuide: Story = {
  parameters: {
    routePath: blogPostsData[0].href,
  },
  play: async ({ canvas }) => {
    await waitFor(async () => {
      await expect(
        canvas.getByRole("heading", { name: blogPostsData[0].title })
      ).toBeVisible();
    });
    await expect(
      canvas.getByText(blogPostsData[0].author.name, { selector: "p" })
    ).toBeVisible();
  },
};

export const ContentIdeas: Story = {
  parameters: {
    routePath: blogPostsData[1].href,
  },
  play: async ({ canvas }) => {
    await waitFor(async () => {
      await expect(
        canvas.getByRole("heading", { name: blogPostsData[1].title })
      ).toBeVisible();
    });
    await expect(
      canvas.getByText(new RegExp(`${blogPostsData[1].readingTime}\\s+read`, "i"))
    ).toBeVisible();
  },
};

export const CreatorStudio: Story = {
  parameters: {
    routePath: blogPostsData[2].href,
  },
  play: async ({ canvas }) => {
    await waitFor(async () => {
      await expect(
        canvas.getByRole("heading", { name: blogPostsData[2].title })
      ).toBeVisible();
    });
    await expect(
      canvas.getByText(/powerful tool that allows creators and businesses/i)
    ).toBeVisible();
  },
};
