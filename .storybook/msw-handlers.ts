import { HttpResponse, http } from 'msw';

export const storybookUserRecord = {
  id: 'rec_storybook_user',
  createdTime: '2026-04-20T03:00:00.000Z',
  fields: {
    email: 'ada@edgy.test',
    fullname: 'Ada Story',
    gender: 'N/A',
    plan: 'Premium',
    password: 'storybook-password',
  },
};

export const mswHandlers = {
  airtableUsers: [
    http.get('/storybook/airtable/users', () =>
      HttpResponse.json({
        records: [storybookUserRecord],
      })
    ),
    http.post('/storybook/airtable/users', async () =>
      HttpResponse.json({
        success: true,
      })
    ),
    http.post('https://api.airtable.com/v0/:baseId/users', async () =>
      HttpResponse.json({
        records: [storybookUserRecord],
      })
    ),
    http.delete('https://api.airtable.com/v0/:baseId/users', async () =>
      HttpResponse.json({
        deleted: true,
      })
    ),
  ],
  captcha: [
    http.post('/storybook/captcha/verify', () =>
      HttpResponse.json({
        success: true,
      })
    ),
  ],
};
