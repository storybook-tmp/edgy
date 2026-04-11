import type { Preview } from '@storybook/react-vite';
import { BrowserRouter as Router } from 'react-router-dom';
import '../src/core-ui/index.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  async beforeEach() {
    // Clear Storybook-specific state but preserve app state
    if (sessionStorage.getItem('loggedIn') === null) {
      // Default: user is not logged in
    }
    // Mock environment variables for fetch calls and services
    Object.defineProperty(import.meta.env, 'VITE_AIRTABLE_SERVER_URL', {
      value: 'https://api.example.com/airtable',
      writable: false,
      configurable: true,
    });
    Object.defineProperty(import.meta.env, 'VITE_CAPTCHA_KEY', {
      value: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
      writable: false,
      configurable: true,
    });
    Object.defineProperty(import.meta.env, 'VITE_CAPTCHA_SECRET', {
      value: '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe',
      writable: false,
      configurable: true,
    });
    Object.defineProperty(import.meta.env, 'VITE_SERVER_URL', {
      value: 'https://api.example.com',
      writable: false,
      configurable: true,
    });
  },
};

export default preview;
