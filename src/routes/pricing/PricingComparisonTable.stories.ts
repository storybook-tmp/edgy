import { config } from '../../../.storybook/preview';

import PricingComparisonTable from './PricingComparisonTable';

const meta = config.meta({
  title: 'AI Generated/Medium/PricingComparisonTable',
  component: PricingComparisonTable,
  args: {
    loggedIn: false,
  },
  parameters: {
    layout: 'fullscreen',
  },
});

export default meta;

export const SignedOut = meta.story({
  args: {
    loggedIn: false,
  },
});

export const SignedIn = meta.story({
  args: {
    loggedIn: true,
  },
});
