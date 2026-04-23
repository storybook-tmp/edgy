import { fn } from "storybook/test";

import { config } from "../../../.storybook/preview";

import Navigation from "./Navigation";

const meta = config.meta({
  title: "AI Generated/Medium/Navigation",
  component: Navigation,
  args: {
    loggedIn: false,
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
});

export default meta;

export const SignedOut = meta.story();

export const SignedIn = meta.story({
  args: {
    loggedIn: true,
  },
});
