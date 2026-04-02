import Newsletter from './Newsletter';

const meta = {
  title: 'AI Generated/Complex/Newsletter',
  component: Newsletter,
};

export default meta;

export const Default = {};

export const WithDarkBackground = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827' }}>
        <Story />
      </div>
    ),
  ],
};
