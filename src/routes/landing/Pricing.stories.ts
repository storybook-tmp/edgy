import preview from "../../../.storybook/preview";

import Pricing from "./Pricing";

const meta = preview.meta({
  title: "AI Generated/Medium/Pricing",
  component: Pricing,
  args: {
    loggedIn: false,
  },
});

export const GuestCheckout = meta.story();

export const ReturningCustomer = meta.story({
  args: {
    loggedIn: true,
  },
});
