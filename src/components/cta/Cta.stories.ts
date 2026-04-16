import preview from "#.storybook/preview";
import Cta from "./Cta";

const meta = preview.meta({
  title: "AI Generated/Simple/Cta",
  component: Cta,
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
