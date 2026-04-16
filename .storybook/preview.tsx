import { MemoryRouter } from 'react-router-dom';
import { definePreview } from '@storybook/react-vite';

import '../src/core-ui/index.css';

export const config = definePreview({
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
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

export default config;
