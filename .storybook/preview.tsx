import type { Preview } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

import '../src/core-ui/index.css';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const initialEntries = context.parameters.router?.initialEntries ?? ['/'];

      return (
        <MemoryRouter initialEntries={initialEntries}>
          <Story />
        </MemoryRouter>
      );
    },
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
};

export default preview;
