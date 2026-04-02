import Comparison from './Comparison';

const meta = {
  title: 'AI Generated/Complex/Comparison',
  component: Comparison,
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
