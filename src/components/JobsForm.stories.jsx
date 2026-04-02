import JobsForm from './JobsForm';

export default {
  title: 'AI Generated/Medium/JobsForm',
  component: JobsForm,
};

export const Empty = {
  args: {},
};

export const Ready = {
  render: (args) => <JobsForm {...args} />,
  args: {},
};
