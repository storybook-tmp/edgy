import NotFound from './NotFound';

/** @type {import('@storybook/react').Meta<typeof NotFound>} */
const meta = {
  title: 'AI Generated/Complex/NotFound',
  component: NotFound,
};

export default meta;

export const Default = {};

export const WithBackground = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 min-h-screen">
        <Story />
      </div>
    ),
  ],
};
