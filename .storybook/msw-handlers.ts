import { http, HttpResponse } from 'msw';

const airtableUrl = 'https://storybook.test/api/airtable/users';
const captchaUrl = 'https://storybook.test/api/verify-captcha';

export const storybookUser = {
  id: 'rec-storybook-user',
  createdTime: '2026-04-01',
  email: 'story@example.com',
  fullname: 'Story Booker',
  gender: 'Female',
  plan: 'Premium',
  password: 'Password123!',
};

export const mswHandlers = [
  http.post(captchaUrl, async ({ request }) => {
    const payload = (await request.json().catch(() => ({}))) as {
      captchaToken?: string;
    };

    if (payload.captchaToken === 'invalid-token') {
      return HttpResponse.json(
        { success: false },
        {
          status: 400,
        }
      );
    }

    return HttpResponse.json({ success: true });
  }),
  http.get(airtableUrl, () =>
    HttpResponse.json({
      records: buildUserRecords(),
    })
  ),
  http.post(airtableUrl, async ({ request }) => {
    const payload = (await request.json()) as {
      formValue?: Record<string, string>;
    };
    const nextEmail = payload.formValue?.email;

    if (nextEmail === 'taken@example.com') {
      return HttpResponse.json({
        success: false,
        reason: 'email',
      });
    }

    return HttpResponse.json({
      success: true,
    });
  }),
];

function buildUserRecords() {
  return [
    {
      id: storybookUser.id,
      createdTime: '2026-04-01T10:00:00.000Z',
      fields: {
        email: storybookUser.email,
        fullname: storybookUser.fullname,
        gender: storybookUser.gender,
        plan: storybookUser.plan,
        password: storybookUser.password,
      },
    },
    {
      id: 'rec-existing-user',
      createdTime: '2026-04-02T10:00:00.000Z',
      fields: {
        email: 'taken@example.com',
        fullname: 'Taken Email',
        gender: 'N/A',
        plan: 'Business',
        password: 'Password123!',
      },
    },
  ];
}
