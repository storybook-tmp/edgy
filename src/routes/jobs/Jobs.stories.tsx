import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import jobs from "../../data/jobs";
import Jobs from "./Jobs";

const meta = {
  component: Jobs,
} satisfies Meta<typeof Jobs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("heading", { name: "Jobs" })).toBeVisible();
    await expect(canvas.getByText(jobs[0].department)).toBeVisible();
    await expect(canvas.getByText(jobs[1].role)).toBeVisible();
  },
};

export const ValidationError: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(
      canvas.getByPlaceholderText("Enter your email"),
      "not-an-email"
    );
    await userEvent.click(canvas.getByRole("button", { name: "Let's do this" }));

    await expect(canvas.getByText("Invalid email format")).toBeVisible();
  },
};

export const SuccessfulSubmission: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(
      canvas.getByPlaceholderText("Enter your email"),
      "candidate@edgy.com"
    );
    await userEvent.click(canvas.getByRole("button", { name: "Let's do this" }));

    await expect(
      canvas.getByText(/we received your request!/i)
    ).toBeVisible();
  },
};
