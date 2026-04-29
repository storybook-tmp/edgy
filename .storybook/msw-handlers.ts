import { http, HttpResponse } from 'msw';

export const mswHandlers = [
  http.get('/api/health', () => HttpResponse.json({ status: 'ok' })),
];
