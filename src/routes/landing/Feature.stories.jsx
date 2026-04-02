import Feature from './Feature';

const meta = {
  title: 'AI Generated/Simple/Feature',
  component: Feature,
};

export default meta;

export const Default = {};

export const DarkBackground = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827' }}>
        <Story />
      </div>
    ),
  ],
};
