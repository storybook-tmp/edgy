import FaqList from './FaqList';

const meta = {
  title: 'AI Generated/Medium/FaqList',
  component: FaqList,
};

export default meta;

export const Default = {};

export const WithDarkBackground = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900">
        <Story />
      </div>
    ),
  ],
};
