import preview from '../../../.storybook/preview';
import { expect } from 'storybook/test';
import Stats from './Stats';

const meta = preview.meta({
  component: Stats,
  tags: ['ai-generated'],
});

export default meta;

export const Default = meta.story({
  render: () => <Stats />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText('Valuable Metrics')
    ).toBeVisible();
    await expect(
      canvas.getByText('TRUSTED BY THOUSANDS OF BUSINESS OWNERS')
    ).toBeVisible();
  },
});
