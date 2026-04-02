import { createElement } from "react";

import preview from "../../../.storybook/preview";

import CareerCta from "./CareerCta";

const meta = preview.meta({
  title: "AI Generated/Simple/CareerCta",
  component: CareerCta,
});

export const Default = meta.story();

export const ConstrainedWidth = meta.story({
  decorators: [
    (Story) =>
      createElement(
        "div",
        { style: { margin: "0 auto", maxWidth: "48rem" } },
        createElement(Story)
      ),
  ],
});
