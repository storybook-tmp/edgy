import Newsletter from './Newsletter';

/** @type {import('@storybook/react').Meta<typeof Newsletter>} */
const meta = {
  title: 'AI Generated/Medium/Newsletter',
  component: Newsletter,
};

export default meta;

export const Default = {};

export const DarkBackground = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8">
        <Story />
      </div>
    ),
  ],
};
