import FaqList from './FaqList';

const meta = {
  title: 'AI Generated/Complex/FaqList',
  component: FaqList,
};

export default meta;

export const Default = {};

export const WithDarkBackground = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};
