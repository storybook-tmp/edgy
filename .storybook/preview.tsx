import React from "react";
import type { Preview } from "@storybook/react-vite";
import MockDate from "mockdate";
import { MemoryRouter } from "react-router-dom";
import { initialize, mswLoader } from "msw-storybook-addon";

import "../src/core-ui/index.css";
import { mswHandlers } from "./msw-handlers";

initialize({
  onUnhandledRequest: "bypass",
});

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const routePath = context.parameters.routePath ?? "/";

      return (
        <MemoryRouter initialEntries={[routePath]}>
          <Story />
        </MemoryRouter>
      );
    },
  ],
  loaders: [mswLoader],
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
    msw: {
      handlers: mswHandlers,
    },
    sessionUser: null,
    routePath: "/",
  },
  async beforeEach(context) {
    const routePath = context.parameters.routePath ?? "/";
    const sessionUser = context.parameters.sessionUser ?? null;

    MockDate.set("2026-04-10T15:53:13Z");
    localStorage.clear();
    sessionStorage.clear();
    window.history.replaceState({}, "", routePath);

    if (sessionUser) {
      sessionStorage.setItem("loggedIn", "true");
      sessionStorage.setItem("user", JSON.stringify(sessionUser));
    } else {
      sessionStorage.removeItem("loggedIn");
      sessionStorage.removeItem("user");
    }

    return () => {
      MockDate.reset();
      window.history.replaceState({}, "", "/");
      localStorage.clear();
      sessionStorage.clear();
    };
  },
};

export default preview;
