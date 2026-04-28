import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { definePreview } from '@storybook/react-vite';
import addonA11y from '@storybook/addon-a11y';
import { mswHandlers } from './msw-handlers';
import '../src/core-ui/index.css';

initialize({
  onUnhandledRequest: 'bypass',
});

const preview = definePreview({
  addons: [addonA11y()],
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
});

export default preview;
