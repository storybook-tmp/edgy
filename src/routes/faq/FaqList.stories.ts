import { expect, userEvent, within } from 'storybook/test';

import { config } from '../../../.storybook/preview';

import FaqList from './FaqList';

const meta = config.meta({
  title: 'AI Generated/Complex/FaqList',
  component: FaqList,
  parameters: {
    layout: 'fullscreen',
  },
});

export default meta;

export const Default = meta.story({});

export const ExpandedFirstQuestion = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /How Does Edgy work\?/i,
    });

    await userEvent.click(button);

    await expect(
      canvas.getByText(
        /At Edgy, we work diligently to provide you with authentic and organic Instagram growth\./i
      )
    ).toBeInTheDocument();
  },
});
