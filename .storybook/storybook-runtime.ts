export type StorybookSessionUser = {
  id: string;
  createdTime: string;
  email: string;
  fullname: string;
  gender: string;
  plan: string;
  password: string;
};

export const STORYBOOK_AIRTABLE_ID = 'storybook-airtable-id';
export const STORYBOOK_AIRTABLE_KEY = 'storybook-airtable-key';
export const STORYBOOK_AIRTABLE_URL = 'https://storybook.local/airtable';
export const STORYBOOK_CAPTCHA_KEY = 'storybook-captcha-key';
export const STORYBOOK_CAPTCHA_SECRET = 'storybook-captcha-secret';
export const STORYBOOK_CAPTCHA_URL = 'https://storybook.local/verify-recaptcha';

export const primarySessionUser: StorybookSessionUser = {
  id: 'recPrimaryStoryUser',
  createdTime: '2024-01-15T00:00:00.000Z',
  email: 'catherine@edgy.com',
  fullname: 'Catherine Black',
  gender: 'Female',
  plan: 'Premium',
  password: 'Password123',
};

export const secondarySessionUser: StorybookSessionUser = {
  id: 'recSecondaryStoryUser',
  createdTime: '2024-02-10T00:00:00.000Z',
  email: 'alex@edgy.com',
  fullname: 'Alex Harper',
  gender: 'N/A',
  plan: 'Standard',
  password: 'Password123',
};

export const sessionUsers = [primarySessionUser, secondarySessionUser];

export function getAirtableUserRecords() {
  return sessionUsers.map(({ id, createdTime, ...fields }) => ({
    id,
    createdTime,
    fields,
  }));
}
