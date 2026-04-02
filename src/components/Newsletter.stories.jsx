import Newsletter from './Newsletter';

export default {
  title: 'AI Generated/Complex/Newsletter',
  component: Newsletter,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {};

export const WithBackground = {
  decorators: [
    (Story) => (
      <div className="bg-gray-800 p-8">
        <Story />
      </div>
    ),
  ],
};
