import preview from '../../.storybook/preview';
import { expect } from 'storybook/test';
import NotFound from './NotFound';

const meta = preview.meta({
  component: NotFound,
  tags: ['ai-generated'],
});

export default meta;

export const Default = meta.story({
  render: () => <NotFound />,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText('This page does not exist')
    ).toBeVisible();
    await expect(
      canvas.getByText(/sorry, we couldn.t find the page/i)
    ).toBeVisible();
  },
});

export const PopularPages = meta.story({
  render: () => <NotFound />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /blog/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /jobs/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /faq/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /back to home/i })).toBeVisible();
  },
});
