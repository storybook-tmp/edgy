import { http, HttpResponse } from 'msw';

export const mswHandlers = [
  http.get('*/api/users', () =>
    HttpResponse.json({
      records: [
        {
          id: 'rec1',
          createdTime: '2024-01-15T10:00:00.000Z',
          fields: {
            email: 'test@example.com',
            password: 'password123',
            fullname: 'Test User',
            gender: 'other',
            plan: 'Premium',
          },
        },
      ],
    })
  ),
  http.post('*/api/captcha', () =>
    HttpResponse.json({ success: true })
  ),
];
