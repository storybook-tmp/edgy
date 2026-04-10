import { HttpResponse, http } from 'msw';
import {
  STORYBOOK_AIRTABLE_URL,
  STORYBOOK_CAPTCHA_URL,
  getAirtableUserRecords,
} from './storybook-runtime';

export const mswHandlers = [
  http.post(STORYBOOK_CAPTCHA_URL, async ({ request }) => {
    const body = await readJsonBody(request);

    if (!body || typeof body !== 'object') {
      return HttpResponse.json({ response: 'Failed' }, { status: 400 });
    }

    if ('captchaToken' in body || 'token' in body) {
      return HttpResponse.json({ response: 'Successful' }, { status: 200 });
    }

    return HttpResponse.json({ response: 'Failed' }, { status: 400 });
  }),
  http.get(STORYBOOK_AIRTABLE_URL, () =>
    HttpResponse.json({ records: getAirtableUserRecords() })
  ),
  http.post(STORYBOOK_AIRTABLE_URL, async ({ request }) => {
    const body = await readJsonBody(request);

    if (!body || typeof body !== 'object' || !('formValue' in body)) {
      return HttpResponse.json(
        { success: false, reason: 'invalid-request' },
        { status: 400 }
      );
    }

    return HttpResponse.json({ success: true }, { status: 200 });
  }),
];

async function readJsonBody(request: Request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}
