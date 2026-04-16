import type { Meta, StoryObj } from "@storybook/react-vite";
import Navigation from "./Navigation";

const noop = () => undefined;

const meta = {
  component: Navigation,
  parameters: {
    routePath: "/pricing",
  },
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SignedOut: Story = {
  args: {
    loggedIn: false,
    setLoggedIn: noop,
    setTriggeredLogout: noop,
  },
};

export const SignedIn: Story = {
  args: {
    loggedIn: true,
    setLoggedIn: noop,
    setTriggeredLogout: noop,
  },
};
