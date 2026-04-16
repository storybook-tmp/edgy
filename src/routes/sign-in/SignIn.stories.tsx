import type { Meta, StoryObj } from "@storybook/react-vite";
import SignIn from "./SignIn";

const retrieveDatabase = async () => true;
const setLoggedIn = () => undefined;

const meta = {
  component: SignIn,
  parameters: {
    routePath: "/sign-in",
  },
} satisfies Meta<typeof SignIn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    retrieveDatabase,
    user: null,
    setLoggedIn,
  },
};
