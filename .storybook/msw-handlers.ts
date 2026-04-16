import { http, HttpResponse } from 'msw';

const storybookAirtableUrl = 'https://storybook.edgy.test/api/airtable';
const storybookCaptchaUrl = 'https://storybook.edgy.test/api/verify-recaptcha';

export const mswHandlers = [
  http.get(storybookAirtableUrl, () =>
    HttpResponse.json({
      records: [
        {
          id: 'rec_storybook_user',
          createdTime: '2026-03-15T08:00:00.000Z',
          fields: {
            email: 'jules@edgy.test',
            fullname: 'Jules Storybook',
            gender: 'Female',
            password: 'storybook123',
            plan: 'Premium',
          },
        },
      ],
    })
  ),
  http.post(storybookAirtableUrl, () =>
    HttpResponse.json({
      success: true,
    })
  ),
  http.post(storybookCaptchaUrl, () =>
    HttpResponse.json({
      success: true,
    })
  ),
];
