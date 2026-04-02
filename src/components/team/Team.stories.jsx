import Team from './Team';

/** @type { import('@storybook/react').Meta<typeof Team> } */
const meta = {
  title: 'AI Generated/Medium/Team',
  component: Team,
};

export default meta;

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const Default = {
  args: {},
};

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const Rendered = {
  args: {},
  render: () => <Team />,
};
