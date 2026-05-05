import preview from '../../../.storybook/preview';
import { expect } from 'storybook/test';
import BlogGrid from './BlogGrid';

const meta = preview.meta({
  component: BlogGrid,
  tags: ['ai-generated'],
});

export default meta;

export const Default = meta.story({
  render: () => <BlogGrid />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText('Edgy Blog')
    ).toBeVisible();
    // Verify blog post cards are rendered
    const links = canvas.getAllByRole('link');
    await expect(links.length).toBeGreaterThan(0);
  },
});
