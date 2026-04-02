import NotFound from './NotFound';

/** @type { import('@storybook/react').Meta<typeof NotFound> } */
const meta = {
  title: 'AI Generated/Simple/NotFound',
  component: NotFound,
};

export default meta;

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const Default = {
  args: {},
};

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const Rendered = {
  args: {},
  render: () => <NotFound />,
};
