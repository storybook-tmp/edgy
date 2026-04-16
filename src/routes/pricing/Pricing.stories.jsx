import Pricing from './Pricing';

const meta = {
  component: Pricing,
};

export default meta;

export const Default = {
  render: () => <Pricing loggedIn={false} />,
};

export const LoggedIn = {
  render: () => <Pricing loggedIn={true} />,
};
