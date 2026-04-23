import { config } from "../../../.storybook/preview";

import BlogGrid from "./BlogGrid";

const meta = config.meta({
  title: "AI Generated/Medium/BlogGrid",
  component: BlogGrid,
});

export default meta;

export const Default = meta.story();

export const PaddedCanvas = meta.story({
  parameters: {
    layout: "padded",
  },
});
