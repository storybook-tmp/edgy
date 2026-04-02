import { vi } from 'vitest';
import ContactForm from './ContactForm';

// Mock ReCAPTCHA to avoid requiring real API keys
vi.mock('react-google-recaptcha', () => ({
  default: ({ sitekey, ref, ...props }) => (
    <div data-testid="recaptcha-mock" {...props}>
      ReCAPTCHA Mock
    </div>
  ),
}));

export default {
  title: 'AI Generated/Complex/ContactForm',
  component: ContactForm,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {},
};

export const ContactFormEmpty = {
  args: {},
};
