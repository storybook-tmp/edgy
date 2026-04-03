import type { Preview } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import MockDate from 'mockdate';
import { initialize, mswLoader } from 'msw-storybook-addon';
import '../src/core-ui/index.css';
import { mswHandlers } from './msw-handlers';

initialize({
  onUnhandledRequest: 'bypass',
});

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const { route, session } = getStorybookAppParameters(context.parameters);

      return (
        <MemoryRouter initialEntries={[route]} key={`${route}:${session}`}>
          <Story />
        </MemoryRouter>
      );
    },
  ],
  loaders: [mswLoader],
  beforeEach(context) {
    const { session } = getStorybookAppParameters(context.parameters);

    MockDate.set('2026-04-03T11:05:40.000Z');
    seedSessionStorage(session);
  },
  parameters: {
    layout: 'fullscreen',
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
};

export default preview;

function getStorybookAppParameters(parameters: Record<string, unknown>) {
  const storybookApp = (parameters.storybookApp ?? {}) as {
    route?: string;
    session?: 'guest' | 'member';
  };

  return {
    route: storybookApp.route ?? '/',
    session: storybookApp.session ?? 'guest',
  };
}

function seedSessionStorage(session: 'guest' | 'member') {
  sessionStorage.removeItem('loggedIn');
  sessionStorage.removeItem('user');

  if (session !== 'member') {
    return;
  }

  sessionStorage.setItem('loggedIn', 'true');
  sessionStorage.setItem(
    'user',
    JSON.stringify({
      id: 'rec_storybook_user',
      createdTime: '2026-03-15',
      email: 'jules@edgy.test',
      fullname: 'Jules Storybook',
      gender: 'Female',
      password: 'storybook123',
      plan: 'Premium',
    })
  );
}
