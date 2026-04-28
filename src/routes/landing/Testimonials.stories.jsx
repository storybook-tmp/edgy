import preview from '../../../.storybook/preview';
import { expect } from 'storybook/test';
import Testimonials from './Testimonials';

const meta = preview.meta({
  component: Testimonials,
  tags: ['ai-generated'],
});

export default meta;

export const Default = meta.story({
  render: () => <Testimonials />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText('Catherine Black')
    ).toBeVisible();
    await expect(
      canvas.getByText('CEO, Edgy')
    ).toBeVisible();
  },
});
