import { config } from "../../../.storybook/preview";

import Pricing from "./Pricing";

const meta = config.meta({
  title: "AI Generated/Medium/PricingPage",
  component: Pricing,
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
