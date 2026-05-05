import { http, HttpResponse } from 'msw';

export const mswHandlers = [
  // Airtable server URL - returns mock user database
  http.get('http://localhost:3001/api/users', () =>
    HttpResponse.json({
      records: [
        {
          id: 'rec123',
          createdTime: '2024-01-15T10:00:00.000Z',
          fields: {
            id: 'user-1',
            email: 'john@example.com',
            password: 'password123',
            fullname: 'John Doe',
            gender: 'male',
            plan: 'premium',
          },
        },
      ],
    })
  ),

  // Airtable server URL - update user
  http.post('http://localhost:3001/api/users', () =>
    HttpResponse.json({ success: true })
  ),

  // reCAPTCHA verification
  http.post('http://localhost:3001/api/verify-captcha', () =>
    HttpResponse.json({ success: true })
  ),

  // Catch-all for any VITE_AIRTABLE_SERVER_URL or VITE_SERVER_URL
  http.get('/api/*', () =>
    HttpResponse.json({ records: [] })
  ),
  http.post('/api/*', () =>
    HttpResponse.json({ success: true })
  ),
];
