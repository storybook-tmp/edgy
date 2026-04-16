export const STORYBOOK_ENV = {
  airtableUrl: 'https://storybook.test/api/airtable',
  serverUrl: 'https://storybook.test/api/captcha',
  captchaKey: 'storybook-captcha-key',
  captchaSecret: 'storybook-captcha-secret',
};

export const storybookUser = {
  id: 'rec_jordan_lee',
  createdTime: '2024-02-17',
  email: 'jordan@example.com',
  fullname: 'Jordan Lee',
  gender: 'Female',
  plan: 'Premium',
  password: 'password123',
};

export const storybookAirtableRecords = [
  {
    id: storybookUser.id,
    createdTime: '2024-02-17T08:15:00.000Z',
    fields: {
      email: storybookUser.email,
      fullname: storybookUser.fullname,
      gender: storybookUser.gender,
      password: storybookUser.password,
      plan: storybookUser.plan,
    },
  },
  {
    id: 'rec_existing_user',
    createdTime: '2023-11-03T10:30:00.000Z',
    fields: {
      email: 'existing@example.com',
      fullname: 'Existing User',
      gender: 'N/A',
      password: 'existing-password',
      plan: 'Standard',
    },
  },
];
