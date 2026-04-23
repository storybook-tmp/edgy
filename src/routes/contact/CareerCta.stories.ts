import { config } from "../../../.storybook/preview";

import CareerCta from "./CareerCta";

const meta = config.meta({
  title: "AI Generated/Simple/CareerCta",
  component: CareerCta,
});

export default meta;

export const Default = meta.story();

export const WithPagePadding = meta.story({
  parameters: {
    layout: "padded",
  },
});
