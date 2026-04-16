import Cta from "./Cta";

const meta = {
  title: "AI Generated/Simple/Cta",
  component: Cta,
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
