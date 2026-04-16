import Cta from "./Cta";

const meta = {
  title: "AI Generated/Medium/Cta",
  component: Cta,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    loggedIn: false,
  },
};

export default meta;

export const SignedOut = {};

export const SignedIn = {
  args: {
    loggedIn: true,
  },
};
