import FaqList from './FaqList';

const meta = {
  title: 'AI Generated/Complex/FaqList',
  component: FaqList,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', backgroundColor: '#111827' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default = {};

export const WithHeading = {
  decorators: [
    (Story) => (
      <div>
        <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>Frequently Asked Questions</h2>
        <Story />
      </div>
    ),
  ],
};
