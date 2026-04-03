import type { Preview } from '@storybook/react-vite';
import MockDate from 'mockdate';
import { MemoryRouter } from 'react-router-dom';
import { initialize, mswLoader } from 'msw-storybook-addon';

import '../src/core-ui/index.css';

import { seedStorybookSession } from './app-runtime';
import { mswHandlers } from './msw-handlers';

declare global {
  interface Window {
    grecaptcha?: {
      execute: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
      render: (
        element: HTMLElement,
        options?: { callback?: (token: string) => void }
      ) => number;
      reset: (widgetId?: number) => void;
    };
  }
}

initialize({
  onUnhandledRequest: 'bypass',
});

function installGrecaptchaStub() {
  let widgetCount = 0;
  const captchaTokens = new Map<number, string>();

  window.grecaptcha = {
    execute(widgetId) {
      return widgetId;
    },
    getResponse(widgetId) {
      if (widgetId === undefined) {
        return 'storybook-captcha-token';
      }

      return captchaTokens.get(widgetId) ?? '';
    },
    render(element, options) {
      const widgetId = widgetCount++;
      const token = `storybook-captcha-token-${widgetId}`;

      captchaTokens.set(widgetId, token);
      element.replaceChildren();

      const badge = document.createElement('div');
      badge.className =
        'flex h-[78px] w-full items-center justify-center rounded-md border border-dashed border-indigo-400 bg-white/5 px-3 text-sm text-gray-200';
      badge.textContent = 'Mock reCAPTCHA';
      element.appendChild(badge);

      options?.callback?.(token);
      return widgetId;
    },
    reset(widgetId) {
      if (widgetId !== undefined) {
        captchaTokens.set(widgetId, `storybook-captcha-token-${widgetId}`);
      }
    },
  };
}

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <MemoryRouter initialEntries={[context.parameters.initialRoute ?? '/']}>
        <Story />
      </MemoryRouter>
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
  async beforeEach() {
    MockDate.set('2024-04-01T12:00:00Z');
    installGrecaptchaStub();
    localStorage.clear();
    seedStorybookSession();
  },
};

export default preview;
