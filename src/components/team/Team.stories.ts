import { createElement } from "react";
import preview from "#.storybook/preview";
import Team from "./Team";

const meta = preview.meta({
  title: "AI Generated/Medium/Team",
  component: Team,
  parameters: {
    layout: "fullscreen",
  },
});

export default meta;

export const Default = meta.story();

export const SpotlightPanel = meta.story({
  decorators: [
    (Story) =>
      createElement(
        "div",
        {
          className:
            "mx-auto max-w-6xl overflow-hidden rounded-[2rem] ring-1 ring-white/10 shadow-2xl",
        },
        createElement(Story)
      ),
  ],
});
