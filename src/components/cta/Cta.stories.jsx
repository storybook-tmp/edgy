import Cta from './Cta';

const meta = {
  component: Cta,
};

export default meta;

export const LoggedOut = {
  render: () => <Cta loggedIn={false} />,
};

export const LoggedIn = {
  render: () => <Cta loggedIn={true} />,
};
