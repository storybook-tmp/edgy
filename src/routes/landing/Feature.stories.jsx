import preview from '../../../.storybook/preview';
import { expect } from 'storybook/test';
import Feature from './Feature';

const meta = preview.meta({
  component: Feature,
  tags: ['ai-generated'],
});

export default meta;

export const Default = meta.story({
  render: () => <Feature />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText('100% handcraft growth')
    ).toBeVisible();
    await expect(
      canvas.getByText('#1 Instagram Growth Agency')
    ).toBeVisible();
  },
});

export const CssCheck = meta.story({
  render: () => <Feature />,
  play: async ({ canvas }) => {
    const heading = canvas.getByText('100% handcraft growth');
    // The heading uses text-[color:var(--primary-font-color)] which is rgb(147, 157, 250)
    await expect(getComputedStyle(heading).color).toBe('rgb(147, 157, 250)');
  },
});
