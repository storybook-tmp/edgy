import { config } from "../../../.storybook/preview";
import ContactImg from "./ContactImg";

const meta = config.meta({
  title: "AI Generated/Simple/ContactImg",
  component: ContactImg,
  decorators: [
    (Story) => (
      <div className="relative min-h-56">
        <Story />
      </div>
    ),
  ],
});

export const Default = meta.story();

export const TallFrame = meta.story({
  decorators: [
    (Story) => (
      <div className="relative min-h-[32rem]">
        <Story />
      </div>
    ),
  ],
});
