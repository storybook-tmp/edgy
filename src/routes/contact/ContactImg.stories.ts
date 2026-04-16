import { createElement } from "react";
import preview from "#.storybook/preview";
import ContactImg from "./ContactImg";

const meta = preview.meta({
  title: "AI Generated/Simple/ContactImg",
  component: ContactImg,
  parameters: {
    layout: "fullscreen",
  },
});

export default meta;

export const FullBleed = meta.story();

export const CardCrop = meta.story({
  decorators: [
    (Story) =>
      createElement(
        "div",
        {
          className:
            "relative mx-auto h-[28rem] max-w-5xl overflow-hidden rounded-[2rem] shadow-2xl",
        },
        createElement(Story)
      ),
  ],
});
