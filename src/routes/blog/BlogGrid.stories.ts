import preview from '../../../.storybook/preview';

import BlogGrid from './BlogGrid';

const meta = preview.meta({
  title: 'AI Generated/Medium/BlogGrid',
  component: BlogGrid,
});

export const Default = meta.story({});

export const Centered = meta.story({
  parameters: {
    layout: 'centered',
  },
});
