import FaqList from './FaqList';

export default {
  title: 'AI Generated/Complex/FaqList',
  component: FaqList,
};

export const Default = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8 max-w-3xl mx-auto">
        <Story />
      </div>
    ),
  ],
};

export const WithWhiteBackground = {
  decorators: [
    (Story) => (
      <div className="bg-white p-8 max-w-3xl mx-auto">
        <Story />
      </div>
    ),
  ],
};
