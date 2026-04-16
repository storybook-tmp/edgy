import { expect, within } from 'storybook/test';

import BlogGrid from './BlogGrid';

export default {
  title: 'AI Generated/Medium/BlogGrid',
  component: BlogGrid,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole('heading', { name: /edgy blog/i })
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole('link', { name: /how to start an instagram blog/i })
    ).toHaveAttribute('href', '/blog/how-to-start-an-instagram-blog');
  },
};

export const EditorialInset = {
  render: () => (
    <section className="bg-gray-950 px-4 py-12">
      <section className="mx-auto max-w-6xl">
        <BlogGrid />
      </section>
    </section>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText(/Instagram Marketing Resources for Businesses/i)
    ).toBeInTheDocument();
  },
};
