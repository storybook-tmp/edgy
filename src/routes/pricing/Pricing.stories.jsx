import Pricing from './Pricing';

const meta = {
  component: Pricing,
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
