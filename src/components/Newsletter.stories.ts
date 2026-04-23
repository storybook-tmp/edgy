import { expect, userEvent, within } from "storybook/test";

import { config } from "../../.storybook/preview";

import Newsletter from "./Newsletter";

const meta = config.meta({
  title: "AI Generated/Complex/Newsletter",
  component: Newsletter,
});

export default meta;

export const Default = meta.story();

export const SuccessfulSubmission = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText("Enter your email"),
      "team@edgy.com",
    );
    await userEvent.click(canvas.getByRole("button", { name: "Notify me" }));

    await expect(
      canvas.getByText(
        "Hold tight! Our representative will contact you shortly via email",
      ),
    ).toBeVisible();
  },
});
