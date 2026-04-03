import { HttpResponse, http } from 'msw';

import { STORYBOOK_ENV, storybookAirtableRecords } from './env';

export const mswHandlers = {
  captcha: [
    http.post(STORYBOOK_ENV.serverUrl, async () => {
      return new HttpResponse(null, { status: 200 });
    }),
  ],
  airtable: [
    http.get(STORYBOOK_ENV.airtableUrl, async () => {
      return HttpResponse.json({ records: storybookAirtableRecords });
    }),
    http.post(STORYBOOK_ENV.airtableUrl, async ({ request }) => {
      const payload = (await request.json()) as {
        formValue?: Record<string, string>;
      };
      const nextEmail = payload.formValue?.email;

      if (nextEmail === 'existing@example.com') {
        return HttpResponse.json({ success: false, reason: 'email' });
      }

      return HttpResponse.json({ success: true });
    }),
  ],
};
