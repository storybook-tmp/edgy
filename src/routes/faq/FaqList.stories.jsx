import { expect, userEvent, within } from "storybook/test";

import FaqList from "./FaqList";

const meta = {
  title: "AI Generated/Complex/FaqList",
  component: FaqList,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-900 px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

export const Collapsed = {};

export const FirstAnswerExpanded = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole("button", { name: /how does edgy work\?/i })
    );

    await expect(
      await canvas.findByText(/authentic and organic instagram growth/i)
    ).toBeInTheDocument();
  },
};
