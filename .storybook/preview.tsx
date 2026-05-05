import '../src/core-ui/index.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { definePreview } from '@storybook/react-vite';

export default definePreview({
  addons: [],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
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
});
