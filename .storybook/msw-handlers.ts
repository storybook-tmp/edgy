import { http, HttpResponse } from 'msw';

const MOCK_API_BASE = 'https://mock-api.edgy.com';

export const mswHandlers = [
  http.get(`${MOCK_API_BASE}/users`, () => {
    return HttpResponse.json({
      records: [
        {
          id: 'rec123',
          createdTime: '2024-01-15T10:30:00.000Z',
          fields: {
            id: 'user-1',
            email: 'john@example.com',
            fullname: 'John Doe',
            gender: 'Male',
            plan: 'Premium',
            password: 'password123',
          },
        },
      ],
    });
  }),

  http.post(`${MOCK_API_BASE}/users`, () => {
    return HttpResponse.json({ success: true });
  }),

  http.post(`${MOCK_API_BASE}/verify`, () => {
    return new HttpResponse(null, { status: 200 });
  }),
];
