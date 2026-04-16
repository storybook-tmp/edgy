import { expect, userEvent, within } from "storybook/test";

import Profile from "./Profile";

const mockUser = {
  id: "rec_123",
  fullname: "Jordan Avery",
  email: "jordan@example.com",
  gender: "N/A",
  plan: "Premium",
  password: "Password123",
};

const meta = {
  title: "AI Generated/Complex/Profile",
  component: Profile,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    user: mockUser,
    updateUser: async () => ({ success: true }),
    deleteUser: () => {},
    setLoggedIn: () => {},
    setTriggeredLogout: () => {},
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-950 px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

export const Overview = {};

export const DeleteConfirmationOpen = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole("button", { name: /delete account/i })
    );

    await expect(
      await canvas.findByText(/are you sure you want to delete your account/i)
    ).toBeInTheDocument();
  },
};
