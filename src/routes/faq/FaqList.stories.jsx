import FaqList from './FaqList';

const meta = {
  title: 'AI Generated/Complex/FaqList',
  component: FaqList,
};

export default meta;

export const Default = {};

export const Narrow = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px', margin: '2rem auto' }}>
        <Story />
      </div>
    ),
  ],
};
