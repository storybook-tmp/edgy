import type { Meta, StoryObj } from "@storybook/react-vite";
import SignUp from "./SignUp";

const registerUser = async () => true;

const meta = {
  component: SignUp,
  parameters: {
    routePath: "/sign-up",
  },
} satisfies Meta<typeof SignUp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    registerUser,
  },
};
