import { http, HttpResponse } from "msw";

import { STORYBOOK_ENV } from "./storybook-env";

export const STORYBOOK_USER = {
  id: "rec_storybook_user",
  createdTime: "2024-03-31",
  email: "member@edgy.com",
  fullname: "Morgan Growth",
  gender: "N/A",
  plan: "Premium",
  password: "Password123",
};

function buildAirtableUserRecord() {
  return {
    id: STORYBOOK_USER.id,
    createdTime: "2024-03-31T12:00:00.000Z",
    fields: {
      email: STORYBOOK_USER.email,
      fullname: STORYBOOK_USER.fullname,
      gender: STORYBOOK_USER.gender,
      plan: STORYBOOK_USER.plan,
      password: STORYBOOK_USER.password,
    },
  };
}

export const mswHandlers = {
  captcha: [
    http.post(STORYBOOK_ENV.VITE_SERVER_URL, async ({ request }) => {
      const body = (await request.json()) as {
        captchaToken?: string;
        secret?: string;
      };

      if (!body.captchaToken) {
        return new HttpResponse(null, { status: 400 });
      }

      return HttpResponse.json(
        {
          success: true,
          score: 0.99,
        },
        { status: 200 }
      );
    }),
  ],
  airtable: [
    http.get(STORYBOOK_ENV.VITE_AIRTABLE_SERVER_URL, () =>
      HttpResponse.json({
        records: [buildAirtableUserRecord()],
      })
    ),
    http.post(STORYBOOK_ENV.VITE_AIRTABLE_SERVER_URL, async ({ request }) => {
      const body = (await request.json()) as {
        formValue?: Record<string, string>;
      };

      if (body.formValue?.email === "taken@edgy.com") {
        return HttpResponse.json({
          success: false,
          reason: "email",
        });
      }

      return HttpResponse.json({
        success: true,
      });
    }),
  ],
};
