import Landing from './Landing';

const meta = {
  component: Landing,
  args: {
    loggedIn: false,
  },
  parameters: {
    route: '/',
  },
};

export default meta;

export const Default = {};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
  parameters: {
    session: 'authenticated',
  },
};
