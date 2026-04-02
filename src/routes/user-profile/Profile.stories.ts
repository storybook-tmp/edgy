import { expect, userEvent, within } from "storybook/test";
import preview from "#.storybook/preview";
import Profile from "./Profile";

const noop = () => {};
const updateUser = async () => ({ success: true });
const baseUser = {
  id: "user_123",
  fullname: "Taylor Morgan",
  email: "taylor@example.com",
  gender: "Non-binary",
  plan: "Business",
  password: "supersecure123",
};

const meta = preview.meta({
  title: "AI Generated/Complex/Profile",
  component: Profile,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    user: baseUser,
    updateUser,
    deleteUser: noop,
    setLoggedIn: noop,
    setTriggeredLogout: noop,
  },
});

export default meta;

export const Default = meta.story();

export const DeleteConfirmation = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole("button", { name: "Delete account" })
    );

    await expect(canvas.getByRole("button", { name: "Delete" })).toBeInTheDocument();
  },
});
