import { http, HttpResponse } from 'msw';

export const storybookUser = {
  id: 'rec-storybook-user',
  createdTime: '2024-03-01T00:00:00.000Z',
  fields: {
    email: 'member@edgy.com',
    fullname: 'Taylor Brooks',
    gender: 'Female',
    plan: 'Premium',
    password: 'Password123',
  },
};

export const storybookUserSession = {
  id: storybookUser.id,
  createdTime: '2024-03-01',
  email: storybookUser.fields.email,
  fullname: storybookUser.fields.fullname,
  gender: storybookUser.fields.gender,
  plan: storybookUser.fields.plan,
  password: storybookUser.fields.password,
};

export const mswHandlers = [
  http.post('https://storybook.edgy.test/verify-recaptcha', () =>
    HttpResponse.json({ success: true })
  ),
  http.get('https://storybook.edgy.test/airtable', () =>
    HttpResponse.json({
      records: [storybookUser],
    })
  ),
  http.post('https://storybook.edgy.test/airtable', async ({ request }) => {
    const payload = (await request.json()) as {
      userId: string;
      formValue: Record<string, string>;
    };

    if (payload.userId !== storybookUser.id) {
      return HttpResponse.json(
        { success: false, reason: 'User not found' },
        { status: 404 }
      );
    }

    return HttpResponse.json({ success: true });
  }),
];
