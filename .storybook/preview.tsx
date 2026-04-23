import { definePreview } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import "../src/core-ui/index.css";

export const config = definePreview({
  addons: [],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
});

export default config;
