import { config } from "../../../.storybook/preview";
import CareerCta from "./CareerCta";

const meta = config.meta({
  title: "AI Generated/Simple/CareerCta",
  component: CareerCta,
});

export const Default = meta.story();

export const NarrowContainer = meta.story({
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-xl">
        <Story />
      </div>
    ),
  ],
});
