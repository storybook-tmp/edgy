import type { Meta, StoryObj } from "@storybook/react-vite";
import Profile from "./Profile";

const user = {
  id: "rec_storybook_user",
  createdTime: "2024-04-01",
  email: "jane@example.com",
  fullname: "Jane Doe",
  gender: "Female",
  plan: "Premium",
  password: "storybook-password",
};

const updateUser = async () => ({ success: true });
const deleteUser = () => undefined;
const setLoggedIn = () => undefined;
const setTriggeredLogout = () => undefined;

const meta = {
  component: Profile,
  parameters: {
    routePath: "/profile",
  },
} satisfies Meta<typeof Profile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user,
    updateUser,
    deleteUser,
    setLoggedIn,
    setTriggeredLogout,
  },
};
