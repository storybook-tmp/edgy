import Feature from './Feature';

export default {
  title: 'AI Generated/Complex/Feature',
  component: Feature,
};

export const Default = {
  args: {},
};

export const Rendered = {
  render: (args) => <Feature {...args} />,
  args: {},
};
