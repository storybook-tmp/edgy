import { vi } from 'vitest';
import { fn } from 'storybook/test';
import SignUpForm from './SignUpForm';

// Mock ReCAPTCHA to avoid requiring real API keys
vi.mock('react-google-recaptcha', () => ({
  default: ({ sitekey, ref, ...props }) => (
    <div data-testid="recaptcha-mock" {...props}>
      ReCAPTCHA Mock
    </div>
  ),
}));

export default {
  title: 'AI Generated/Complex/SignUpForm',
  component: SignUpForm,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    registerUser: fn().mockResolvedValue(true),
  },
};

export const SignUpFormEmpty = {
  args: {
    registerUser: fn().mockResolvedValue(true),
  },
};
