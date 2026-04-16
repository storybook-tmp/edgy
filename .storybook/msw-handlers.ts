import { http, HttpResponse } from 'msw';

export const mswHandlers = [
  // Airtable server - user database (used by App.jsx on auth)
  http.get('http://localhost:3000/api/users', () =>
    HttpResponse.json({
      records: [],
    })
  ),
  http.post('http://localhost:3000/api/users', () =>
    HttpResponse.json({ success: true })
  ),
  // ReCAPTCHA verification (used by sign-in/sign-up/contact forms)
  http.post('http://localhost:3000/verify-recaptcha', () =>
    new HttpResponse(null, { status: 200 })
  ),
];
