import { expect } from 'storybook/test';
import Landing from './Landing';

const meta = {
  component: Landing,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Edgy')).toBeVisible();
    await expect(canvas.getByText(/your instagram growth secret/i)).toBeVisible();
    await expect(canvas.getByText('Meet Our Team')).toBeVisible();
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Edgy')).toBeVisible();
    await expect(canvas.getByText(/your instagram growth secret/i)).toBeVisible();
  },
};
