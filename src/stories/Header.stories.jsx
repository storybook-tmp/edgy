import { Header } from './Header';

const meta = {
  title: 'AI Generated/Medium/Header',
  component: Header,
};

export default meta;

export const LoggedOut = {
  args: {
    onLogin: () => {},
    onLogout: () => {},
    onCreateAccount: () => {},
  },
};

export const LoggedIn = {
  args: {
    user: { name: 'Jane Doe' },
    onLogin: () => {},
    onLogout: () => {},
    onCreateAccount: () => {},
  },
};
