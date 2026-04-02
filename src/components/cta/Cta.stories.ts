import { config } from '../../../.storybook/preview';

import Cta from './Cta';

const meta = config.meta({
  title: 'AI Generated/Simple/Cta',
  component: Cta,
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
