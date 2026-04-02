import { MemoryRouter } from "react-router-dom";

import "../src/core-ui/index.css";

const preview = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default preview;
