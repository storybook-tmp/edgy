import { expect, within } from 'storybook/test';

import PricingFaq from './PricingFaq';

export default {
  title: 'AI Generated/Simple/PricingFaq',
  component: PricingFaq,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole('heading', { name: /frequently asked questions/i })
    ).toBeInTheDocument();
    await expect(canvas.getAllByRole('term')).toHaveLength(6);
  },
};

export const Constrained = {
  render: () => (
    <section className="bg-gray-950 px-4 py-12">
      <section className="mx-auto max-w-5xl">
        <PricingFaq />
      </section>
    </section>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText(/How Does Edgy work\?/i)
    ).toBeInTheDocument();
  },
};
