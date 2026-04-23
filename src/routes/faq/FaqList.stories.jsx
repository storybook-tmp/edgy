import FaqList from './FaqList';

const meta = {
  title: 'AI Generated/Medium/FaqList',
  component: FaqList,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
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
