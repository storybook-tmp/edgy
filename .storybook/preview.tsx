import type { Preview } from '@storybook/react-vite';
import MockDate from 'mockdate';
import { useRef } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { initialize, mswLoader } from 'msw-storybook-addon';

import '../src/core-ui/index.css';

import { storybookUser } from './env';
import { mswHandlers } from './msw-handlers';

initialize({
  onUnhandledRequest: 'bypass',
});

const preview: Preview = {
  loaders: [mswLoader],
  decorators: [
    (Story, context) => {
      const route = context.parameters.route ?? '/';
      const session = context.parameters.session ?? 'anonymous';

      return (
        <AppRuntime key={`${route}:${session}`} route={route} session={session}>
          <Story />
        </AppRuntime>
      );
    },
  ],
  async beforeEach() {
    MockDate.set('2024-04-01T12:00:00Z');
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
      handlers: Object.values(mswHandlers).flat(),
    },
  },
};

export default preview;

function AppRuntime({
  children,
  route,
  session,
}: {
  children: React.ReactNode;
  route: string;
  session: string;
}) {
  const appliedSignature = useRef('');
  const signature = `${route}:${session}`;

  if (appliedSignature.current !== signature) {
    syncRoute(route);
    syncSession(session);
    appliedSignature.current = signature;
  }

  return <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>;
}

function syncRoute(route: string) {
  window.history.replaceState({}, '', route);
}

function syncSession(session: string) {
  sessionStorage.clear();

  if (session === 'authenticated') {
    sessionStorage.setItem('loggedIn', 'true');
    sessionStorage.setItem('user', JSON.stringify(storybookUser));
  }
}
