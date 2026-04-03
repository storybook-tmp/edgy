import { http, HttpResponse } from 'msw';

export const mswHandlers = {
  airtable: [
    http.get(/.*airtable.*/, () =>
      HttpResponse.json({
        records: [
          {
            id: 'rec1',
            createdTime: '2024-01-15T10:00:00.000Z',
            fields: {
              email: 'demo@edgy.com',
              fullname: 'Demo User',
              gender: 'other',
              plan: 'Premium',
              password: 'demo123',
            },
          },
        ],
      })
    ),
    http.post(/.*airtable.*/, () =>
      HttpResponse.json({ success: true })
    ),
  ],
  captcha: [
    http.post(/.*captcha.*/, () =>
      HttpResponse.json({ success: true })
    ),
  ],
};
