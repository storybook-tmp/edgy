import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import Faq from './Faq';

const meta = {
  component: Faq,
  parameters: {
    initialRoute: '/faq',
  },
  render: () => <Faq />,
} satisfies Meta<typeof Faq>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FirstQuestionOpen: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      await canvas.findByRole('button', {
        name: /how does edgy work\?/i,
      })
    );

    await expect(
      await canvas.findByText(
        /we work diligently to provide you with authentic and organic instagram growth/i
      )
    ).toBeInTheDocument();
  },
};

export const TwoQuestionsOpen: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      await canvas.findByRole('button', {
        name: /how many followers should i expect\?/i,
      })
    );
    await userEvent.click(
      await canvas.findByRole('button', {
        name: /do you work manually\?/i,
      })
    );

    await expect(
      await canvas.findByText(
        /the number of followers you gain depends on various factors/i
      )
    ).toBeInTheDocument();
    await expect(
      await canvas.findByText(
        /we take pride in our commitment to authenticity and manual growth/i
      )
    ).toBeInTheDocument();
  },
};
