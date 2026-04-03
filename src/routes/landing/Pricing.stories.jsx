import Pricing from "./Pricing";

const meta = {
  title: "AI Generated/Medium/LandingPricing",
  component: Pricing,
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
