import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Jobs from './Jobs';

const meta = {
  component: Jobs,
  parameters: {
    initialEntries: ['/jobs'],
  },
} satisfies Meta<typeof Jobs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /jobs/i })
    ).toBeVisible();
    await expect(
      canvas.getByText(/ready to advance your career/i)
    ).toBeVisible();
  },
};

export const ListingContent: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/social media management/i)).toBeVisible();
    await expect(canvas.getByText(/marketing/i)).toBeVisible();
  },
};

export const EmailValidation: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole('button', { name: /let's do this/i })
    );

    await expect(canvas.getByText(/empty email field/i)).toBeVisible();
  },
};
