import JobsForm from './JobsForm';

const meta = {
  title: 'AI Generated/Complex/JobsForm',
  component: JobsForm,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default = {};

export const InNarrowContainer = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};
