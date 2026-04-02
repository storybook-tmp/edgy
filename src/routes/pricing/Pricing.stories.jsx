import Pricing from './Pricing';

export default {
  title: 'AI Generated/Complex/Pricing',
  component: Pricing,
};

export const LoggedOut = {
  args: {
    loggedIn: false,
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
};
