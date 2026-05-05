import { http, HttpResponse } from 'msw';

export const mswHandlers = [
  http.get('https://airtable-server.example.com', () => {
    return HttpResponse.json({
      records: [
        {
          id: 'rec123',
          createdTime: '2023-01-15T10:00:00.000Z',
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
    });
  }),
  http.post('https://airtable-server.example.com', () => {
    return HttpResponse.json({ success: true });
  }),
];
