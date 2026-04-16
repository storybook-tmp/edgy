import Cta from './Cta';

const meta = {
  component: Cta,
  args: {
    loggedIn: false,
  },
  parameters: {
    route: '/',
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

export const OnPricingPage = {
  parameters: {
    route: '/pricing',
  },
};
