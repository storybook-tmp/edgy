import { expect, waitFor } from 'storybook/test';
import Jobs from './Jobs';

const meta = {
  component: Jobs,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /jobs/i })).toBeVisible();
    await expect(canvas.getAllByText(/hr assistant/i)[0]).toBeVisible();
    await expect(
      canvas.getByRole('heading', { name: /ready to advance your career/i })
    ).toBeVisible();
  },
};

export const ApplicationEmailSubmitted = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByLabelText(/email address/i), 'career@edgy.com');
    await userEvent.click(canvas.getByRole('button', { name: /let.*do this/i }));

    await waitFor(async () => {
      await expect(canvas.getByText(/we received your request/i)).toBeVisible();
    });
  },
};
