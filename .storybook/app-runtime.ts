const AIRTABLE_SERVER_URL = import.meta.env.VITE_AIRTABLE_SERVER_URL;

export const storybookUser = {
  id: 'rec_storybook_user',
  createdTime: '2024-03-15',
  email: 'jules@edgy.com',
  fullname: 'Jules Harper',
  gender: 'Female',
  plan: 'Premium',
  password: 'password123',
};

export const storybookAirtableRecords = [
  {
    id: storybookUser.id,
    createdTime: '2024-03-15T00:00:00.000Z',
    fields: {
      email: storybookUser.email,
      fullname: storybookUser.fullname,
      gender: storybookUser.gender,
      plan: storybookUser.plan,
      password: storybookUser.password,
    },
  },
];

export const loggedOutNavigationProps = {
  loggedIn: false,
  setLoggedIn: () => undefined,
  setTriggeredLogout: () => undefined,
};

export const loggedInNavigationProps = {
  loggedIn: true,
  setLoggedIn: () => undefined,
  setTriggeredLogout: () => undefined,
};

export const signInProps = {
  retrieveDatabase: retrieveDatabase,
  setLoggedIn: () => undefined,
  user: storybookUser,
};

export const signUpProps = {
  registerUser: registerUser,
};

export const profileProps = {
  user: storybookUser,
  updateUser: updateUser,
  deleteUser: () => undefined,
  setLoggedIn: () => undefined,
  setTriggeredLogout: () => undefined,
};

export function seedStorybookSession(user = storybookUser) {
  sessionStorage.clear();
  sessionStorage.setItem('loggedIn', 'true');
  sessionStorage.setItem('user', JSON.stringify(user));
}

export async function retrieveDatabase(email: string, password?: string) {
  const response = await fetch(AIRTABLE_SERVER_URL);
  const data = await response.json();
  const userRecord = data.records.find(
    (record: (typeof storybookAirtableRecords)[number]) =>
      record.fields.email === email
  );

  if (!userRecord) {
    return false;
  }

  if (password === undefined) {
    return true;
  }

  return userRecord.fields.password === password;
}

export async function registerUser(data: {
  email: string;
  fullname: string;
  password: string;
}) {
  const userExists = await retrieveDatabase(data.email.toLowerCase());
  return !userExists;
}

export async function updateUser(
  userId: string,
  formValue: Record<string, string>
) {
  const response = await fetch(AIRTABLE_SERVER_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ userId, formValue }),
  });

  return response.json();
}
