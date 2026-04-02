import JobsForm from './JobsForm';

export default {
  title: 'AI Generated/Complex/JobsForm',
  component: JobsForm,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {};

export const OnDarkBackground = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8">
        <Story />
      </div>
    ),
  ],
};
