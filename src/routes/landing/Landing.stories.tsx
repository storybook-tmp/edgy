import type { Meta, StoryObj } from "@storybook/react-vite";
import Landing from "./Landing";

const meta = {
  component: Landing,
  parameters: {
    routePath: "/",
  },
} satisfies Meta<typeof Landing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Guest: Story = {
  args: {
    loggedIn: false,
  },
};

export const Member: Story = {
  args: {
    loggedIn: true,
  },
};
