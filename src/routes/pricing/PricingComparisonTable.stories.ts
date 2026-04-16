import preview from "#.storybook/preview";
import PricingComparisonTable from "./PricingComparisonTable";

const meta = preview.meta({
  title: "AI Generated/Medium/PricingComparisonTable",
  component: PricingComparisonTable,
  parameters: {
    layout: "fullscreen",
  },
});

export default meta;

export const SignedOut = meta.story({
  args: {
    loggedIn: false,
  },
});

export const SignedIn = meta.story({
  args: {
    loggedIn: true,
  },
});
