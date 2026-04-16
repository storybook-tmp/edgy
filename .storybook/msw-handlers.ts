import { http, HttpResponse } from 'msw';

const mockUsers = {
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
};

export const mswHandlers = [
  // Airtable server proxy - GET users
  http.get('*/airtable', () => HttpResponse.json(mockUsers)),

  // Airtable server proxy - POST update user
  http.post('*/airtable', () =>
    HttpResponse.json({ success: true })
  ),

  // Airtable API - catch any direct Airtable SDK calls
  http.all('https://api.airtable.com/*', () =>
    HttpResponse.json({ records: [] })
  ),

  // reCAPTCHA verification
  http.post('*/verify-recaptcha', () =>
    HttpResponse.json({ success: true })
  ),
];
