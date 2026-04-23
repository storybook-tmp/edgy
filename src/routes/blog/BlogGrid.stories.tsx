import { config } from '#.storybook/preview';

import BlogGrid from './BlogGrid';

const meta = config.meta({
  title: 'AI Generated/Medium/BlogGrid',
  component: BlogGrid,
});

export const Default = meta.story();

export const FramedGrid = meta.story({
  render: () => (
    <div className="bg-gray-950 px-6 py-12">
      <BlogGrid />
    </div>
  ),
});
