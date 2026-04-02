import "../src/core-ui/index.css";

import { definePreview } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

export const config = definePreview({
  addons: [],
  decorators: [
    (Story, context) => (
      <MemoryRouter initialEntries={[context.parameters.routerPath ?? "/"]}>
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
