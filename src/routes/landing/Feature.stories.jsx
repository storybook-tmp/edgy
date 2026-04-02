import Feature from './Feature';

const meta = {
  title: 'AI Generated/Medium/Feature',
  component: Feature,
};

export default meta;

export const Default = {};

export const Narrow = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '768px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};
