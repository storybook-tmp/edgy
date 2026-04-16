import type { Preview } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import MockDate from 'mockdate';
import { MemoryRouter } from 'react-router-dom';
import { initialize, mswLoader } from 'msw-storybook-addon';

import '../src/core-ui/index.css';
import { mswHandlers, storybookUser } from './msw-handlers';

initialize({
  onUnhandledRequest: 'bypass',
});

type StorybookParameters = Preview['parameters'] & {
  pathname?: string;
  session?: {
    loggedIn?: boolean;
    user?: Partial<typeof storybookUser>;
  };
};

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <StorybookRouter
        key={getStoryPathname(context.parameters as StorybookParameters)}
        pathname={getStoryPathname(context.parameters as StorybookParameters)}
      >
        <Story />
      </StorybookRouter>
    ),
  ],
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
    MockDate.set('2026-04-11T09:00:00.000Z');
    localStorage.clear();
    sessionStorage.clear();

    const session = getStorySession(context.parameters as StorybookParameters);
    if (session.loggedIn) {
      sessionStorage.setItem('loggedIn', 'true');
      sessionStorage.setItem('user', JSON.stringify(session.user));
    }

    return () => {
      MockDate.reset();
      localStorage.clear();
      sessionStorage.clear();
    };
  },
};

export default preview;

function StorybookRouter({
  children,
  pathname,
}: {
  children: ReactNode;
  pathname: string;
}) {
  window.history.replaceState({}, '', pathname);

  return <MemoryRouter initialEntries={[pathname]}>{children}</MemoryRouter>;
}

function getStoryPathname(parameters: StorybookParameters = {}) {
  return parameters.pathname ?? '/';
}

function getStorySession(parameters: StorybookParameters = {}) {
  if (parameters.session?.loggedIn) {
    return {
      loggedIn: true,
      user: {
        ...storybookUser,
        ...parameters.session.user,
      },
    };
  }

  return {
    loggedIn: false,
    user: storybookUser,
  };
}
