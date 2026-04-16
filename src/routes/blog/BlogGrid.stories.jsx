import BlogGrid from './BlogGrid';

export default {
  title: 'AI Generated/Medium/BlogGrid',
  component: BlogGrid,
};

export const Default = {};

export const WithDarkBackground = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8 min-h-screen">
        <Story />
      </div>
    ),
  ],
};
