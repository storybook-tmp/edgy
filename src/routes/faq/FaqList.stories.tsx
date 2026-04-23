import { config } from '#.storybook/preview';
import { expect, userEvent, within } from 'storybook/test';

import FaqList from './FaqList';

const meta = config.meta({
  title: 'AI Generated/Complex/FaqList',
  component: FaqList,
});

export const Default = meta.story();

export const FirstAnswerExpanded = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole('button', { name: 'How Does Edgy work?' }),
    );

    await expect(
      canvas.getByText(/At Edgy, we work diligently to provide you/i),
    ).toBeVisible();
  },
});
