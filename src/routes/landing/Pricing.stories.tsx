import { config } from '#.storybook/preview';

import Pricing from './Pricing';

const meta = config.meta({
  title: 'AI Generated/Medium/Pricing',
  component: Pricing,
  args: {
    loggedIn: false,
  },
});

export const LoggedOut = meta.story();

export const LoggedIn = meta.story({
  args: {
    loggedIn: true,
  },
});
