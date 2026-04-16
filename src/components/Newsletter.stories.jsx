import Newsletter from './Newsletter';

const meta = {
  title: 'AI Generated/Medium/Newsletter',
  component: Newsletter,
};

export default meta;

export const Default = {};

export const NarrowViewport = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '480px' }}>
        <Story />
      </div>
    ),
  ],
};
