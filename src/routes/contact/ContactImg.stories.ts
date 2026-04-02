import { config } from "../../../.storybook/preview";

import ContactImg from "./ContactImg";

const meta = config.meta({
  title: "AI Generated/Simple/ContactImg",
  component: ContactImg,
});

export default meta;

export const Default = meta.story();

export const Centered = meta.story({
  parameters: {
    layout: "centered",
  },
});
