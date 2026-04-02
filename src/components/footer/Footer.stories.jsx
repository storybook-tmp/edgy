import Footer from './Footer';

/** @type { import('@storybook/react').Meta<typeof Footer> } */
const meta = {
  title: 'AI Generated/Simple/Footer',
  component: Footer,
};

export default meta;

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const Default = {
  args: {},
};

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const Rendered = {
  args: {},
  render: () => <Footer />,
};
