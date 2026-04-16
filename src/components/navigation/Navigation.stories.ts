import { fn } from "storybook/test";

import preview from "../../../.storybook/preview";

import Navigation from "./Navigation";

const meta = preview.meta({
  title: "AI Generated/Medium/Navigation",
  component: Navigation,
  args: {
    loggedIn: false,
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
});

export const SignedOut = meta.story();

export const LoggedIn = meta.story({
  args: {
    loggedIn: true,
  },
});
