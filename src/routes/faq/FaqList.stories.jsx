import FaqList from './FaqList';

const meta = {
  title: 'AI Generated/Complex/FaqList',
  component: FaqList,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default = {};

export const InNarrowContainer = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};
