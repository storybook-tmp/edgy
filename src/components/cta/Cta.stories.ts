import { config } from '../../../.storybook/preview';

import Cta from './Cta';

const meta = config.meta({
  title: 'AI Generated/Medium/Cta',
  component: Cta,
  parameters: {
    layout: 'fullscreen',
  },
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
