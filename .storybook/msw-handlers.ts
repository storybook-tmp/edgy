import { http, HttpResponse } from 'msw';

const mockUser = {
  id: 'rec123456',
  createdTime: '2024-01-15T10:00:00.000Z',
  fields: {
    id: 'user-001',
    email: 'john@example.com',
    password: 'password123',
    fullname: 'John Doe',
    gender: 'Male',
    plan: 'Premium',
  },
};

export const mswHandlers = [
  http.get('*/airtable', () =>
    HttpResponse.json({
      records: [mockUser],
    })
  ),
  http.post('*/airtable', () => HttpResponse.json({ success: true })),
  http.post('*/verify-recaptcha', () => HttpResponse.json({ success: true })),
];
