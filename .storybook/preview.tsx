import type { Preview } from '@storybook/react-vite';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { MemoryRouter } from 'react-router-dom';
import '../src/core-ui/index.css';
import { mswHandlers } from './msw-handlers';

initialize({
  onUnhandledRequest: 'bypass',
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  loaders: [mswLoader],
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
    msw: {
      handlers: mswHandlers,
    },
  },
  async beforeEach() {
    sessionStorage.setItem('loggedIn', 'true');
    sessionStorage.setItem(
      'user',
      JSON.stringify({
        id: 'rec123',
        createdTime: '2024-01-15',
        email: 'john@example.com',
        fullname: 'John Doe',
        gender: 'male',
        plan: 'premium',
        password: 'password123',
      })
    );
  },
};

export default preview;
