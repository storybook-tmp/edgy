import { expect, userEvent, within } from 'storybook/test';

import JobsForm from './JobsForm';

export default {
  title: 'AI Generated/Complex/JobsForm',
  component: JobsForm,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole('heading', { name: /ready to advance your career/i })
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole('button', { name: /let's do this/i })
    ).toBeInTheDocument();
  },
};

export const ValidationError = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(
      canvas.getByRole('button', { name: /let's do this/i })
    );
    await expect(
      await canvas.findByText(/empty email field/i)
    ).toBeInTheDocument();
  },
};
