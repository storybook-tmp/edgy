import Team from './Team';

export default {
  title: 'AI Generated/Complex/Team',
  component: Team,
};

export const Default = {
  args: {},
};

export const Rendered = {
  render: (args) => <Team {...args} />,
  args: {},
};
