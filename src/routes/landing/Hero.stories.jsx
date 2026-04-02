import Hero from './Hero';

/** @type {import('@storybook/react').Meta<typeof Hero>} */
const meta = {
  title: 'AI Generated/Complex/Hero',
  component: Hero,
};

export default meta;

export const Default = {};

export const WithBackground = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900">
        <Story />
      </div>
    ),
  ],
};
