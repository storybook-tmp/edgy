import { expect, userEvent, within } from "storybook/test";

import FaqList from "./FaqList";

const meta = {
  title: "AI Generated/Complex/FaqList",
  component: FaqList,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = {
  render: () => (
    <section className="bg-gray-900 px-6 py-10">
      <section className="mx-auto max-w-4xl">
        <FaqList />
      </section>
    </section>
  ),
};

export const FirstAnswerExpanded = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstQuestion = canvas.getAllByRole("button")[0];

    await userEvent.click(firstQuestion);

    await expect(
      canvas.getByText(/authentic and organic instagram growth/i),
    ).toBeInTheDocument();
  },
};
