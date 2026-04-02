import Newsletter from './Newsletter';

const meta = {
  title: 'AI Generated/Medium/Newsletter',
  component: Newsletter,
};

export default meta;

export const Default = {};

export const InContainer = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};
