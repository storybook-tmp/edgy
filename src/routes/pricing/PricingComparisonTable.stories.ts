import preview from "../../../.storybook/preview";

import PricingComparisonTable from "./PricingComparisonTable";

const meta = preview.meta({
  title: "AI Generated/Medium/PricingComparisonTable",
  component: PricingComparisonTable,
  args: {
    loggedIn: false,
  },
});

export const GuestPlans = meta.story();

export const LoggedInPlans = meta.story({
  args: {
    loggedIn: true,
  },
});
