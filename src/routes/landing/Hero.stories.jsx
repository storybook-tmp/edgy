import Hero from './Hero';

const meta = {
  title: 'AI Generated/Complex/Hero',
  component: Hero,
};

export default meta;

export const Default = {};

export const OnDarkBackground = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827' }}>
        <Story />
      </div>
    ),
  ],
};
