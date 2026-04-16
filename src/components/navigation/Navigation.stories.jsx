import { fn } from 'storybook/test';
import Navigation from './Navigation';

const meta = {
  component: Navigation,
};

export default meta;

export const LoggedOut = {
  render: () => (
    <Navigation loggedIn={false} setLoggedIn={fn()} setTriggeredLogout={fn()} />
  ),
};

export const LoggedIn = {
  render: () => (
    <Navigation loggedIn={true} setLoggedIn={fn()} setTriggeredLogout={fn()} />
  ),
};
