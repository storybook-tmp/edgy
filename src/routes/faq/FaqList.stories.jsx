import { expect, userEvent, within } from 'storybook/test';

import FaqList from './FaqList';

export default {
  title: 'AI Generated/Complex/FaqList',
  component: FaqList,
  decorators: [
    (Story) => (
      <section className="bg-gray-900 px-4 py-12">
        <section className="mx-auto max-w-4xl">
          <Story />
        </section>
      </section>
    ),
  ],
};

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole('button', { name: /how does edgy work\?/i })
    ).toBeInTheDocument();
  },
};

export const FirstQuestionOpen = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /how does edgy work\?/i,
    });
    await userEvent.click(trigger);
    await expect(
      canvas.getByText(/authentic and organic Instagram growth/i)
    ).toBeInTheDocument();
  },
};
