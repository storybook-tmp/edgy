import SignUpForm from './SignUpForm';

const meta = {
  title: 'AI Generated/Complex/SignUpForm',
  component: SignUpForm,
  args: {
    registerUser: async () => true,
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827', padding: '2rem', maxWidth: '480px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default = {};

export const WithExistingUser = {
  args: {
    registerUser: async () => false,
  },
};
