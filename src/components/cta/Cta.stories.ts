import preview from "../../../.storybook/preview";

import Cta from "./Cta";

const meta = preview.meta({
  title: "AI Generated/Simple/Cta",
  component: Cta,
  args: {
    loggedIn: false,
  },
});

export const SignedOut = meta.story();

export const LoggedIn = meta.story({
  args: {
    loggedIn: true,
  },
});
