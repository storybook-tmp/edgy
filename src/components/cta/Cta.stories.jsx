import { expect } from 'storybook/test';
import Cta from './Cta';

const meta = {
  component: Cta,
  tags: ['ai-generated'],
};

export default meta;

export const LoggedOut = {
  render: () => <Cta loggedIn={false} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /ready to dive in/i })).toBeVisible();
    const link = canvas.getByRole('link', { name: /get started/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '/sign-up');
  },
};

export const LoggedIn = {
  render: () => <Cta loggedIn={true} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /ready to dive in/i })).toBeVisible();
    const link = canvas.getByRole('link', { name: /get started/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '/profile');
  },
};

export const WithSubheading = {
  render: () => <Cta loggedIn={false} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/start your free trial today/i)).toBeVisible();
  },
};
