import Landing from './Landing';

const meta = {
  component: Landing,
  args: {
    loggedIn: false,
  },
};

export default meta;

export const Default = {};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
};
