import { http, HttpResponse } from 'msw';

export const mswHandlers = {
  airtable: [
    http.get('**/airtable/**', () =>
      HttpResponse.json({
        records: [
          {
            id: 'rec123',
            createdTime: '2024-01-15T10:00:00.000Z',
            fields: {
              id: 'user-1',
              email: 'demo@edgy.com',
              fullname: 'Demo User',
              gender: 'Other',
              plan: 'Premium',
              password: 'password123',
            },
          },
        ],
      })
    ),
    http.post('**/airtable/**', () =>
      HttpResponse.json({ success: true })
    ),
  ],
  captcha: [
    http.post('**/verify-captcha**', () =>
      HttpResponse.json({ success: true }, { status: 200 })
    ),
  ],
};
