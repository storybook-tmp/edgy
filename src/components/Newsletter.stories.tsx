import { config } from "../../.storybook/preview";
import { expect, userEvent, within } from "storybook/test";
import Newsletter from "./Newsletter";

const meta = config.meta({
  title: "AI Generated/Complex/Newsletter",
  component: Newsletter,
});

export const Default = meta.story();

export const SuccessfulSubmit = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByRole("textbox", { name: /email address/i }),
      "hello@edgy.com"
    );
    await userEvent.click(canvas.getByRole("button", { name: /notify me/i }));

    await expect(
      canvas.getByText(/hold tight! our representative will contact you shortly/i)
    ).toBeInTheDocument();
  },
});
