import Landing from './Landing';

const meta = {
  component: Landing,
};

export default meta;

export const Default = {
  render: () => <Landing loggedIn={false} />,
};

export const LoggedIn = {
  render: () => <Landing loggedIn={true} />,
};
