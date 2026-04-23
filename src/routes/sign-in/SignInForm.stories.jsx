import { fn } from 'storybook/test';
import SignInForm from './SignInForm';

const meta = {
  title: 'AI Generated/Complex/SignInForm',
  component: SignInForm,
  args: {
    retrieveDatabase: fn(),
    setLoggedIn: fn(),
  },
};

export default meta;

export const Default = {};

export const WithContainerStyling = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
        <Story />
      </div>
    ),
  ],
};
