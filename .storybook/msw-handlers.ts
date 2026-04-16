import { http, HttpResponse } from 'msw';

export const mswHandlers = {
  airtable: [
    http.get('**/airtable', () =>
      HttpResponse.json({
        records: [
          {
            id: 'rec123',
            createdTime: '2024-01-15T10:00:00.000Z',
            fields: {
              id: 'user-1',
              email: 'jane@example.com',
              fullname: 'Jane Doe',
              gender: 'Female',
              plan: 'Premium',
              password: 'password123',
            },
          },
        ],
      })
    ),
    http.post('**/airtable', () =>
      HttpResponse.json({ success: true })
    ),
  ],
  captcha: [
    http.post('**/verify-recaptcha', () =>
      HttpResponse.json({ success: true })
    ),
  ],
};
