import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";

import Navigation from "./Navigation";

const noopLoggedOut = fn();
const noopTriggeredLogout = fn();
const logoutLoggedIn = fn();
const logoutTriggered = fn();

const meta = {
  component: Navigation,
  args: {
    loggedIn: false,
    setLoggedIn: noopLoggedOut,
    setTriggeredLogout: noopTriggeredLogout,
  },
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("img", { name: "Edgy" })).toBeVisible();
    await expect(canvas.getByRole("link", { name: "About" })).toBeVisible();
    await expect(canvas.getByRole("link", { name: "Sign in" })).toBeVisible();
    await expect(canvas.getByRole("link", { name: "Sign up" })).toBeVisible();
  },
};

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("button", { name: "Sign out" })
    ).toBeVisible();
    await expect(canvas.getByRole("link", { name: "Profile" })).toBeVisible();
    await expect(canvas.getByRole("link", { name: "Pricing" })).toBeVisible();
  },
};

export const SignOutAction: Story = {
  args: {
    loggedIn: true,
    setLoggedIn: logoutLoggedIn,
    setTriggeredLogout: logoutTriggered,
  },
  play: async ({ canvas, userEvent }) => {
    logoutLoggedIn.mockClear();
    logoutTriggered.mockClear();

    await userEvent.click(canvas.getByRole("button", { name: "Sign out" }));

    await expect(logoutTriggered).toHaveBeenCalledWith(true);
    await expect(logoutLoggedIn).toHaveBeenCalledWith(false);
  },
};
