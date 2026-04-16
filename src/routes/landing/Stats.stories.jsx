import Stats from './Stats';

export default {
  title: 'AI Generated/Simple/Stats',
  component: Stats,
};

export const Default = {};

export const DarkBackground = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-4">
        <Story />
      </div>
    ),
  ],
};
