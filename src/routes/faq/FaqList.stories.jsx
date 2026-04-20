import { expect } from 'storybook/test';
import FaqList from './FaqList';

const meta = {
  component: FaqList,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('button', { name: /how does edgy work/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: /do you offer any sort of free trial/i })
    ).toBeVisible();
  },
};

export const FirstQuestionOpen = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole('button', { name: /how does edgy work/i })
    );

    await expect(
      canvas.getByText(/authentic and organic instagram growth/i)
    ).toBeVisible();
  },
};

export const IndustryQuestionOpen = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole('button', {
        name: /does my account have to be in specific industry/i,
      })
    );

    await expect(
      canvas.getByText(/we cater to a diverse range of clients/i)
    ).toBeVisible();
  },
};
