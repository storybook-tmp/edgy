import { HttpResponse, http } from 'msw';

import { storybookAirtableRecords } from './app-runtime';

const AIRTABLE_SERVER_URL = import.meta.env.VITE_AIRTABLE_SERVER_URL;
const CAPTCHA_SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const mswHandlers = [
  http.post(CAPTCHA_SERVER_URL, async () =>
    HttpResponse.json({ success: true }, { status: 200 })
  ),
  http.get(AIRTABLE_SERVER_URL, () =>
    HttpResponse.json({ records: storybookAirtableRecords })
  ),
  http.post(AIRTABLE_SERVER_URL, async ({ request }) => {
    const body = (await request.json()) as {
      formValue?: Record<string, string>;
    };

    if (body.formValue?.email === 'taken@edgy.com') {
      return HttpResponse.json({
        success: false,
        reason: 'email',
      });
    }

    return HttpResponse.json({ success: true });
  }),
];
