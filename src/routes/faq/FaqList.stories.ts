import { expect, userEvent, within } from 'storybook/test';

import preview from '../../../.storybook/preview';

import FaqList from './FaqList';

const meta = preview.meta({
  title: 'AI Generated/Complex/FaqList',
  component: FaqList,
});

export const Default = meta.story({});

export const FirstQuestionExpanded = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole('button', { name: /how does edgy work\?/i })
    );

    await expect(
      canvas.getByText(/we work diligently to provide you with authentic and organic instagram growth/i)
    ).toBeVisible();
  },
});
