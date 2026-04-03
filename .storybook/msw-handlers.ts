import { http, HttpResponse } from 'msw';

export const mswHandlers = [
  // Airtable database retrieval (VITE_AIRTABLE_SERVER_URL)
  http.get(/\/undefined$/, () => {
    return HttpResponse.json({
      records: [
        {
          id: 'rec_mock_001',
          createdTime: '2024-01-15T10:00:00.000Z',
          fields: {
            email: 'jane@example.com',
            fullname: 'Jane Doe',
            gender: 'Female',
            plan: 'Premium',
            password: 'securepass1',
          },
        },
      ],
    });
  }),
  // User update and captcha verification (POST to undefined env var URLs)
  http.post(/\/undefined$/, () => {
    return HttpResponse.json({ success: true });
  }),
];
