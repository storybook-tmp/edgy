import Navigation from "./Navigation";

const noop = () => {};

const meta = {
  title: "AI Generated/Medium/Navigation",
  component: Navigation,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    loggedIn: false,
    setLoggedIn: noop,
    setTriggeredLogout: noop,
  },
};

export default meta;

export const LoggedOut = {};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
};
