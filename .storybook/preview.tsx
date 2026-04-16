import type { Preview } from '@storybook/react-vite';
import MockDate from 'mockdate';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { initialize, mswLoader } from 'msw-storybook-addon';
import '../src/core-ui/index.css';
import { mswHandlers } from './msw-handlers';
import type { StorybookSessionUser } from './storybook-runtime';

initialize({
  onUnhandledRequest: 'bypass',
  serviceWorker: {
    url: '/mockServiceWorker.js',
  },
});

const preview: Preview = {
  decorators: [withRouter],
  loaders: [mswLoader],
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
  async beforeEach(context) {
    MockDate.set('2026-04-10T12:00:00.000Z');
    window.history.replaceState({}, '', getRoutePath(context.parameters));
    seedSessionStorage((context.parameters.session as SessionParameters | undefined)?.user);
  },
};

export default preview;

function withRouter(Story, context) {
  const routePath = getRoutePath(context.parameters);

  return (
    <MemoryRouter key={routePath} initialEntries={[routePath]}>
      <RouterLocation />
      <Story />
    </MemoryRouter>
  );
}

function RouterLocation() {
  const location = useLocation();

  return (
    <output data-router-path={location.pathname} hidden>
      {location.pathname}
    </output>
  );
}

function getRoutePath(parameters) {
  return typeof parameters.routePath === 'string' ? parameters.routePath : '/';
}

function seedSessionStorage(user?: StorybookSessionUser) {
  sessionStorage.removeItem('loggedIn');
  sessionStorage.removeItem('user');

  if (!user) {
    return;
  }

  sessionStorage.setItem('loggedIn', 'true');
  sessionStorage.setItem('user', JSON.stringify(user));
}

type SessionParameters = {
  user?: StorybookSessionUser;
};
