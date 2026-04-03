import Landing from './Landing';

const meta = {
  component: Landing,
};

export default meta;

export const Default = {
  args: {
    loggedIn: false,
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
};
