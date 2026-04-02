import SignInForm from './SignInForm';

const meta = {
  title: 'AI Generated/Complex/SignInForm',
  component: SignInForm,
  args: {
    retrieveDatabase: async () => true,
    setLoggedIn: () => {},
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

export const WithFailedRetrieval = {
  args: {
    retrieveDatabase: async () => false,
  },
};
