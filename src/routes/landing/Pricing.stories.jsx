import Pricing from './Pricing';

const meta = {
  title: 'AI Generated/Medium/Pricing',
  component: Pricing,
};

export default meta;

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
