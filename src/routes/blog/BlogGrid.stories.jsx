import BlogGrid from './BlogGrid';

const meta = {
  title: 'AI Generated/Medium/BlogGrid',
  component: BlogGrid,
};

export default meta;

export const Default = {};

export const WithDarkBackground = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900">
        <Story />
      </div>
    ),
  ],
};
