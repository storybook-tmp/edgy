import BlogGrid from './BlogGrid';

const meta = {
  title: 'AI Generated/Complex/BlogGrid',
  component: BlogGrid,
};

export default meta;

export const Default = {};

export const WithDarkBackground = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};
