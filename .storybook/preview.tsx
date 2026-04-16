import type { Preview } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import "../src/core-ui/index.css";

const storybookSessionUser = {
  id: "rec_storybook_user",
  createdTime: "2024-04-01",
  email: "jane@example.com",
  fullname: "Jane Doe",
  gender: "Female",
  plan: "Premium",
  password: "storybook-password",
};

const storybookUsersResponse = {
  records: [
    {
      id: storybookSessionUser.id,
      createdTime: "2024-04-01T12:00:00.000Z",
      fields: {
        email: storybookSessionUser.email,
        fullname: storybookSessionUser.fullname,
        gender: storybookSessionUser.gender,
        plan: storybookSessionUser.plan,
        password: storybookSessionUser.password,
      },
    },
  ],
};

const storybookEndpoints = {
  captcha: "https://storybook.local/api/captcha",
  users: "https://storybook.local/api/users",
};

function normalizeRoutePath(routePath?: string) {
  if (!routePath || routePath.length === 0) {
    return "/";
  }

  return routePath.startsWith("/") ? routePath : `/${routePath}`;
}

function seedBrowserSession() {
  window.sessionStorage.clear();
  window.sessionStorage.setItem("loggedIn", "true");
  window.sessionStorage.setItem("user", JSON.stringify(storybookSessionUser));
}

function installBrowserMocks() {
  window.scrollTo = () => undefined;

  Object.defineProperty(window.navigator, "share", {
    configurable: true,
    value: async () => undefined,
  });

  Object.defineProperty(window.navigator, "clipboard", {
    configurable: true,
    value: {
      writeText: async () => undefined,
    },
  });
}

function createMockFetch(originalFetch: typeof fetch) {
  return async (input: RequestInfo | URL, init?: RequestInit) => {
    const request = input instanceof Request ? input : new Request(input, init);
    const url = new URL(request.url, window.location.origin);

    if (url.href === storybookEndpoints.captcha) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    if (url.href === storybookEndpoints.users) {
      if (request.method === "POST") {
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      return new Response(JSON.stringify(storybookUsersResponse), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return originalFetch(request);
  };
}

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <MemoryRouter
        initialEntries={[normalizeRoutePath(context.parameters.routePath as string | undefined)]}
      >
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
  async beforeEach(context) {
    const routePath = normalizeRoutePath(context.parameters.routePath as string | undefined);
    const originalFetch = window.fetch.bind(window);
    const originalUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    const search = window.location.search;

    seedBrowserSession();
    installBrowserMocks();
    window.fetch = createMockFetch(originalFetch);
    window.history.replaceState({}, "", `${routePath}${search}`);

    return () => {
      window.fetch = originalFetch;
      window.sessionStorage.clear();
      window.history.replaceState({}, "", originalUrl);
    };
  },
};

export default preview;
