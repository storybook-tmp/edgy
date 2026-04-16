import { MemoryRouter } from "react-router-dom";
import { definePreview } from "@storybook/react-vite";

import "../src/core-ui/index.css";

const preview = definePreview({
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
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
      test: "todo",
    },
    layout: "fullscreen",
  },
});

export default preview;
