import Pricing from './Pricing';

const meta = {
  component: Pricing,
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
