import { expect, userEvent, within } from "storybook/test";
import preview from "#.storybook/preview";
import JobsForm from "./JobsForm";

const meta = preview.meta({
  title: "AI Generated/Complex/JobsForm",
  component: JobsForm,
  parameters: {
    layout: "fullscreen",
  },
});

export default meta;

export const Default = meta.story();

export const ValidationError = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: "Let's do this" }));

    await expect(canvas.getByText("Empty email field")).toBeInTheDocument();
  },
});
