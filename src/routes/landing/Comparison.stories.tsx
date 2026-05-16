import { config } from "../../../.storybook/preview";
import Comparison from "./Comparison";

const meta = config.meta({
  title: "AI Generated/Medium/Comparison",
  component: Comparison,
  args: {
    loggedIn: false,
  },
});

export const LoggedOut = meta.story();

export const LoggedIn = meta.story({
  args: {
    loggedIn: true,
  },
});
