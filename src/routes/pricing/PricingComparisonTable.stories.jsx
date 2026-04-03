import PricingComparisonTable from "./PricingComparisonTable";

const meta = {
  title: "AI Generated/Medium/PricingComparisonTable",
  component: PricingComparisonTable,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    loggedIn: false,
  },
};

export default meta;

export const LoggedOut = {};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
};
