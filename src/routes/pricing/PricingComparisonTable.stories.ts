import { config } from "../../../.storybook/preview";

import PricingComparisonTable from "./PricingComparisonTable";

const meta = config.meta({
  title: "AI Generated/Medium/PricingComparisonTable",
  component: PricingComparisonTable,
  args: {
    loggedIn: false,
  },
});

export default meta;

export const SignedOut = meta.story();

export const SignedIn = meta.story({
  args: {
    loggedIn: true,
  },
});
