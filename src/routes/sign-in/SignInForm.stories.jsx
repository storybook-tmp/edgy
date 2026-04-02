import SignInForm from './SignInForm';

export default {
  title: 'AI Generated/Complex/SignInForm',
  component: SignInForm,
  parameters: {
    test: {
      dangerouslyIgnoreUnhandledErrors: true,
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <Story />
        </div>
      </div>
    ),
  ],
};

export const Default = {
  args: {
    retrieveDatabase: async () => false,
    setLoggedIn: () => {},
  },
};

export const WithInvalidCredentials = {
  args: {
    retrieveDatabase: async () => false,
    setLoggedIn: () => {},
  },
};
