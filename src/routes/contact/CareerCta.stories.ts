import { createElement } from "react";
import preview from "#.storybook/preview";
import CareerCta from "./CareerCta";

const meta = preview.meta({
  title: "AI Generated/Simple/CareerCta",
  component: CareerCta,
  parameters: {
    layout: "fullscreen",
  },
});

export default meta;

export const Default = meta.story();

export const Framed = meta.story({
  decorators: [
    (Story) =>
      createElement(
        "div",
        { className: "mx-auto max-w-5xl overflow-hidden rounded-[2rem] shadow-2xl" },
        createElement(Story)
      ),
  ],
});
