import { expect, fn, userEvent, within } from "storybook/test";

import { config } from "../../../.storybook/preview";

import Profile from "./Profile";

const meta = config.meta({
  title: "AI Generated/Complex/Profile",
  component: Profile,
  args: {
    user: {
      id: "user_123",
      fullname: "Catherine Black",
      email: "catherine@example.com",
      gender: "Female",
      plan: "Premium",
      password: "supersecurepassword",
    },
    updateUser: fn(async () => ({ success: true })),
    deleteUser: fn(),
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
});

export default meta;

export const Default = meta.story();

export const DeleteConfirmationOpen = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: /delete account/i }));

    await expect(
      canvas.getByText(/permanent removal of all your data/i),
    ).toBeVisible();
  },
});
