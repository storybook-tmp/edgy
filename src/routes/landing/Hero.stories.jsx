import Hero from './Hero';

/** @type { import('@storybook/react').Meta<typeof Hero> } */
const meta = {
  title: 'AI Generated/Complex/Hero',
  component: Hero,
};

export default meta;

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const Default = {
  args: {},
};

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const Rendered = {
  args: {},
  render: () => <Hero />,
};
