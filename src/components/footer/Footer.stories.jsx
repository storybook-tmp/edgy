import Footer from './Footer';

/** @type {import('@storybook/react').Meta<typeof Footer>} */
const meta = {
  title: 'AI Generated/Simple/Footer',
  component: Footer,
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
