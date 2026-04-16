import Feature from './Feature';

const meta = {
  title: 'AI Generated/Simple/Feature',
  component: Feature,
};

export default meta;

export const Default = {};

export const FullWidth = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '100%' }}>
        <Story />
      </div>
    ),
  ],
};
