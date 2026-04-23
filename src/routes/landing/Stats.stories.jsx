import Stats from './Stats';

const meta = {
  title: 'AI Generated/Simple/Stats',
  component: Stats,
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
