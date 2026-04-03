import Cta from './Cta';

const meta = {
  component: Cta,
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
