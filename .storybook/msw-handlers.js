import { http, HttpResponse } from 'msw';

export const mswHandlers = [
  // Mock Airtable user records API
  http.get(/\/api\/airtable/, () =>
    HttpResponse.json({
      records: [
        {
          id: 'rec-mock-001',
          createdTime: '2024-01-15T10:00:00.000Z',
          fields: {
            id: 'user-uuid-001',
            email: 'jane@example.com',
            fullname: 'Jane Doe',
            gender: 'Female',
            plan: 'Premium',
            password: 'securepass1',
          },
        },
      ],
    })
  ),
  // Mock Airtable user update API
  http.post(/\/api\/airtable/, () =>
    HttpResponse.json({ success: true })
  ),
  // Mock CAPTCHA verification
  http.post(/\/verify/, () =>
    new HttpResponse(null, { status: 200 })
  ),
];
