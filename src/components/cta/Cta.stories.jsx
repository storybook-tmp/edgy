import Cta from './Cta';

const meta = {
  title: 'AI Generated/Simple/Cta',
  component: Cta,
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
