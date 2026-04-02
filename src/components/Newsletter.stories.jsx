import Newsletter from './Newsletter';

export default {
  title: 'AI Generated/Medium/Newsletter',
  component: Newsletter,
};

export const Empty = {
  args: {},
};

export const WithEmail = {
  render: (args) => <Newsletter {...args} />,
  args: {},
};
