import BlogGrid from './BlogGrid';

const meta = {
  title: 'AI Generated/Complex/BlogGrid',
  component: BlogGrid,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default = {};

export const Constrained = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};
