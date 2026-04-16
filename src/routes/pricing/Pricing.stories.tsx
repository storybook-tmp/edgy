import type { Meta, StoryObj } from "@storybook/react-vite";
import Pricing from "./Pricing";

const meta = {
  component: Pricing,
  parameters: {
    routePath: "/pricing",
  },
} satisfies Meta<typeof Pricing>;

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
