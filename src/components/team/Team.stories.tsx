import { config } from "../../../.storybook/preview";
import Team from "./Team";

const meta = config.meta({
  title: "AI Generated/Medium/Team",
  component: Team,
});

export const Default = meta.story();

export const CompactGrid = meta.story({
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-4xl">
        <Story />
      </div>
    ),
  ],
});
