import JobsForm from './JobsForm';

/** @type {import('@storybook/react').Meta<typeof JobsForm>} */
const meta = {
  title: 'AI Generated/Complex/JobsForm',
  component: JobsForm,
};

export default meta;

export const Default = {};

export const WithDarkBackground = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8">
        <Story />
      </div>
    ),
  ],
};
