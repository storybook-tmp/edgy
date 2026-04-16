import { expect, within } from 'storybook/test';

import CareerCta from './CareerCta';

export default {
  title: 'AI Generated/Simple/CareerCta',
  component: CareerCta,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: /see open positions/i });
    await expect(link).toHaveAttribute('href', '/jobs');
  },
};

export const Spotlight = {
  render: () => (
    <section className="bg-gray-950 px-4 py-12">
      <CareerCta />
    </section>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole('heading', { name: /looking for a new career/i })
    ).toBeInTheDocument();
  },
};
