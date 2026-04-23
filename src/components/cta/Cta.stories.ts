import preview from '../../../.storybook/preview';

import Cta from './Cta';

const meta = preview.meta({
  title: 'AI Generated/Medium/Cta',
  component: Cta,
  args: {
    loggedIn: false,
  },
});

export const LoggedOut = meta.story({});

export const LoggedIn = meta.story({
  args: {
    loggedIn: true,
  },
});
