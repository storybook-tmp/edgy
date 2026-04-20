import type { Preview } from '@storybook/react-vite';
import React from 'react';
import MockDate from 'mockdate';
import { BrowserRouter } from 'react-router-dom';
import { initialize, mswLoader } from 'msw-storybook-addon';
import '../src/core-ui/index.css';
import { mswHandlers } from './msw-handlers';

initialize({
  onUnhandledRequest: 'bypass',
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
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
    MockDate.set('2026-04-20T03:00:00.000Z');

    return () => {
      MockDate.reset();
    };
  },
};

export default preview;
