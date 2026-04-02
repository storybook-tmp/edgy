import Newsletter from './Newsletter';

/** @type { import('@storybook/react').Meta<typeof Newsletter> } */
const meta = {
  title: 'AI Generated/Medium/Newsletter',
  component: Newsletter,
};

export default meta;

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const Default = {
  args: {},
};

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const Rendered = {
  args: {},
  render: () => <Newsletter />,
};
