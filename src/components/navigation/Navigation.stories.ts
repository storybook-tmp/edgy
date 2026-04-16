import preview from "#.storybook/preview";
import Navigation from "./Navigation";

const noop = () => {};

const meta = preview.meta({
  title: "AI Generated/Medium/Navigation",
  component: Navigation,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    setLoggedIn: noop,
    setTriggeredLogout: noop,
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
