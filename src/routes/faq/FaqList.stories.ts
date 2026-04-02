import { expect, userEvent, within } from "storybook/test";

import { config } from "../../../.storybook/preview";

import FaqList from "./FaqList";

const meta = config.meta({
  title: "AI Generated/Complex/FaqList",
  component: FaqList,
});

export default meta;

export const Default = meta.story();

export const FirstQuestionExpanded = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: /how does edgy work/i }));

    await expect(
      canvas.getByText(/authentic and organic instagram growth/i),
    ).toBeVisible();
  },
});
