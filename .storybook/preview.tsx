import type { Preview } from '@storybook/react-vite';
import MockDate from 'mockdate';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { MemoryRouter } from 'react-router-dom';
import '../src/core-ui/index.css';
import { mswHandlers } from './msw-handlers';

initialize({
  onUnhandledRequest: 'bypass',
});

const mockCaptchaToken = 'storybook-captcha-token';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      render: (container: HTMLElement) => number;
      getResponse: (widgetId?: number) => string;
      reset: (widgetId?: number) => void;
      execute: () => undefined;
    };
  }
}

type BrowserState = Record<string, string>;
type PreviewParameters = {
  initialEntries?: string[];
  storybookLocalStorage?: BrowserState;
  storybookSessionStorage?: BrowserState;
  useMemoryRouter?: boolean;
  windowLocationPathname?: string;
};

function applyStorage(storage: Storage, entries: BrowserState | undefined) {
  storage.clear();

  for (const [key, value] of Object.entries(entries ?? {})) {
    storage.setItem(key, value);
  }
}

function installRecaptchaMock() {
  let widgetCount = 0;
  const tokens = new Map<number, string>();

  window.grecaptcha = {
    ready(callback: () => void) {
      callback();
    },
    render(container: HTMLElement) {
      widgetCount += 1;
      tokens.set(widgetCount, mockCaptchaToken);
      container.replaceChildren();

      const badge = document.createElement('div');
      badge.dataset.testid = 'mock-recaptcha';
      badge.className =
        'rounded-md border border-dashed border-indigo-500 px-4 py-3 text-sm text-white';
      badge.textContent = 'Storybook reCAPTCHA';
      container.appendChild(badge);

      return widgetCount;
    },
    getResponse(widgetId?: number) {
      return widgetId === undefined
        ? mockCaptchaToken
        : (tokens.get(widgetId) ?? mockCaptchaToken);
    },
    reset(widgetId?: number) {
      if (widgetId !== undefined) {
        tokens.set(widgetId, mockCaptchaToken);
      }
    },
    execute() {
      return undefined;
    },
  };
}

const preview: Preview = {
  loaders: [mswLoader],
  decorators: [
    (Story, context) => {
      const parameters = context.parameters as PreviewParameters;

      applyStorage(localStorage, parameters.storybookLocalStorage);
      applyStorage(sessionStorage, parameters.storybookSessionStorage);

      if (parameters.windowLocationPathname) {
        window.history.replaceState({}, '', parameters.windowLocationPathname);
      }

      if (parameters.useMemoryRouter === false) {
        return <Story />;
      }

      return (
        <MemoryRouter initialEntries={parameters.initialEntries ?? ['/']}>
          <Story />
        </MemoryRouter>
      );
    },
  ],
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
  async beforeEach() {
    MockDate.set('2024-04-01T12:00:00Z');
    window.history.replaceState({}, '', '/');
    localStorage.clear();
    sessionStorage.clear();
    installRecaptchaMock();
  },
};

export default preview;
