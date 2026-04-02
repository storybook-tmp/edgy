import Partners from './Partners';

const meta = {
  title: 'AI Generated/Simple/Partners',
  component: Partners,
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
