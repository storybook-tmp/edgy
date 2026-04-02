import { createElement } from "react";

import preview from "../../../.storybook/preview";

import ContactImg from "./ContactImg";

const withFrame = (maxWidth: string, minHeight: string) => (Story: () => unknown) =>
  createElement(
    "div",
    {
      style: {
        margin: "0 auto",
        maxWidth,
        minHeight,
        position: "relative",
        backgroundColor: "#111827",
      },
    },
    createElement(Story)
  );

const meta = preview.meta({
  title: "AI Generated/Simple/ContactImg",
  component: ContactImg,
});

export const CompactHero = meta.story({
  decorators: [withFrame("48rem", "14rem")],
});

export const DesktopSplitLayout = meta.story({
  decorators: [withFrame("80rem", "32rem")],
});
