import { http, HttpResponse } from 'msw';

export const mswHandlers = [
  // Airtable server URL - returns user database
  http.get('**/api/airtable*', () =>
    HttpResponse.json({
      records: [
        {
          id: 'rec123',
          createdTime: '2024-01-15T10:00:00.000Z',
          fields: {
            id: 'user-1',
            email: 'demo@edgy.com',
            password: 'password123',
            fullname: 'Demo User',
            gender: 'other',
            plan: 'Premium',
          },
        },
      ],
    }),
  ),
  // Airtable server URL - POST for user updates
  http.post('**/api/airtable*', () =>
    HttpResponse.json({ success: true }),
  ),
  // reCAPTCHA verification server
  http.post('**/api/captcha*', () =>
    HttpResponse.json({ success: true }),
  ),
  // Catch-all for any VITE_SERVER_URL or VITE_AIRTABLE_SERVER_URL
  http.get('/api/*', () =>
    HttpResponse.json({ records: [] }),
  ),
  http.post('/api/*', () =>
    HttpResponse.json({ success: true }),
  ),
];
