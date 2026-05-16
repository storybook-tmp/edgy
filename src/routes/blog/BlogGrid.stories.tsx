import { config } from "../../../.storybook/preview";
import BlogGrid from "./BlogGrid";

const meta = config.meta({
  title: "AI Generated/Medium/BlogGrid",
  component: BlogGrid,
});

export const Default = meta.story();

export const NarrowLayout = meta.story({
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-4xl">
        <Story />
      </div>
    ),
  ],
});
