import { http, HttpResponse } from 'msw';

export const mswHandlers = [
  http.get(/.*VITE_AIRTABLE_SERVER_URL.*/, () =>
    HttpResponse.json({ records: [] })
  ),
];
