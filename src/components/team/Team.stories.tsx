import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import team from "../../data/team";
import Team from "./Team";

const meta = {
  component: Team,
} satisfies Meta<typeof Team>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("heading", { name: "Meet Our Team" })
    ).toBeVisible();
    await expect(canvas.getByText(team[0].name)).toBeVisible();
    await expect(canvas.getByText(team[1].name)).toBeVisible();
  },
};

export const TeamMembers: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getAllByRole("img", { name: /team member/i })
    ).toHaveLength(team.length);
    await expect(canvas.getByText(team[team.length - 1].name)).toBeVisible();
    await expect(canvas.getByText(team[team.length - 1].role)).toBeVisible();
  },
};

export const SocialProfiles: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole("link", { name: "Twitter" })).toHaveLength(
      team.length
    );
    await expect(
      canvas.getAllByRole("link", { name: "LinkedIn" })
    ).toHaveLength(team.length);
  },
};
