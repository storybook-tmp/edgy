import Pricing from './Pricing';

const meta = {
  component: Pricing,
  args: {
    loggedIn: false,
  },
  parameters: {
    route: '/pricing',
  },
};

export default meta;

export const SignedOut = {};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
  parameters: {
    session: 'authenticated',
  },
};
