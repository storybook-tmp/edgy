import Newsletter from './Newsletter';

const meta = {
  title: 'AI Generated/Complex/Newsletter',
  component: Newsletter,
};

export default meta;

export const Default = {};

export const InContainer = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1200px' }}>
        <Story />
      </div>
    ),
  ],
};
