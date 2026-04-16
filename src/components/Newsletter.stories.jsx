import { expect, userEvent, within } from "storybook/test";

import Newsletter from "./Newsletter";

const meta = {
  title: "AI Generated/Complex/Newsletter",
  component: Newsletter,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = {};

export const ValidationError = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole("button", {
        name: /notify me/i,
      }),
    );

    await expect(canvas.getByText(/empty email field/i)).toBeInTheDocument();
  },
};
