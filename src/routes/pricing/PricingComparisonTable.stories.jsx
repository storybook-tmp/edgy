import PricingComparisonTable from './PricingComparisonTable';

const meta = {
  title: 'AI Generated/Complex/PricingComparisonTable',
  component: PricingComparisonTable,
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
