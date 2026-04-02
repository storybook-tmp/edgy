import { config } from "../../../.storybook/preview";

import Cta from "./Cta";

const meta = config.meta({
  title: "AI Generated/Simple/Cta",
  component: Cta,
  args: {
    loggedIn: false,
  },
});

export default meta;

export const LoggedOut = meta.story();

export const LoggedIn = meta.story({
  args: {
    loggedIn: true,
  },
});
