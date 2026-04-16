import { config } from '../../../.storybook/preview';

import PricingComparisonTable from './PricingComparisonTable';

const meta = config.meta({
  title: 'AI Generated/Medium/PricingComparisonTable',
  component: PricingComparisonTable,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    loggedIn: false,
  },
});

export const GuestPlans = meta.story();

export const MemberPlans = meta.story({
  args: {
    loggedIn: true,
  },
});
