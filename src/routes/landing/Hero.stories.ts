import { expect, userEvent, within } from "storybook/test";
import preview from "#.storybook/preview";
import Hero from "./Hero";

const meta = preview.meta({
  title: "AI Generated/Complex/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
});

export default meta;

export const Default = meta.story();

export const SuccessfulSubmit = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText("Enter your email"),
      "creator@example.com"
    );
    await userEvent.click(
      canvas.getByRole("button", { name: "Start free trial" })
    );

    await expect(
      canvas.getByText(
        "Hold tight! Our representative will contact you shortly via email"
      )
    ).toBeInTheDocument();
  },
});
