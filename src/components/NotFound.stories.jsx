import { expect } from 'storybook/test';
import NotFound from './NotFound';

export default {
  component: NotFound,
};

export const Default = {
  render: () => <NotFound />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /this page does not exist/i })
    ).toBeVisible();
    await expect(canvas.getByText(/sorry/i)).toBeVisible();
  },
};

export const NavigationLinks = {
  render: () => <NotFound />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /blog/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /jobs/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /faq/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /back to home/i })).toBeVisible();
  },
};
