import { config } from '#.storybook/preview';
import { fn } from 'storybook/test';

import Navigation from './Navigation';

const meta = config.meta({
  title: 'AI Generated/Complex/Navigation',
  component: Navigation,
  args: {
    loggedIn: false,
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
});

export const LoggedOut = meta.story();

export const LoggedIn = meta.story({
  args: {
    loggedIn: true,
  },
});
