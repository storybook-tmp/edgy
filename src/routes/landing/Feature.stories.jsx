import Feature from './Feature';

const meta = {
  title: 'AI Generated/Medium/Feature',
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
