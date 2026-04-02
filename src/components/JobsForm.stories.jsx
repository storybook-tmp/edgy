import JobsForm from './JobsForm';

/** @type { import('@storybook/react').Meta<typeof JobsForm> } */
const meta = {
  title: 'AI Generated/Medium/JobsForm',
  component: JobsForm,
};

export default meta;

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const Default = {
  args: {},
};

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const Rendered = {
  args: {},
  render: () => <JobsForm />,
};
