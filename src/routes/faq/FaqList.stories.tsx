import { config } from "../../../.storybook/preview";
import { expect, userEvent, within } from "storybook/test";
import FaqList from "./FaqList";

const meta = config.meta({
  title: "AI Generated/Complex/FaqList",
  component: FaqList,
});

export const Default = meta.story();

export const FirstAnswerExpanded = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole("button", { name: /how does edgy work/i })
    );

    await expect(
      canvas.getByText(/provide you with authentic and organic instagram growth/i)
    ).toBeVisible();
  },
});
