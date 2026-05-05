import { expect } from 'storybook/test';
import Jobs from './Jobs';

const meta = {
  component: Jobs,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    const listings = canvas.getAllByText(/HR Assistant|Growth Specialist|Senior React Developer/);
    await expect(listings.length).toBeGreaterThan(0);
  },
};

export const JobListings = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('HR Assistant')).toBeVisible();
    await expect(canvas.getByText('Senior React Developer')).toBeVisible();
  },
};

export const JobsForm = {
  play: async ({ canvas }) => {
    const emailInputs = canvas.getAllByPlaceholderText(/email/i);
    await expect(emailInputs.length).toBeGreaterThan(0);
  },
};
