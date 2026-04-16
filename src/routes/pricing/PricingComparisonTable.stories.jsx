import { expect, within } from 'storybook/test';

import PricingComparisonTable from './PricingComparisonTable';

export default {
  title: 'AI Generated/Medium/PricingComparisonTable',
  component: PricingComparisonTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoggedOut = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [link] = canvas.getAllByRole('link', { name: /buy standard/i });
    await expect(
      link
    ).toHaveAttribute('href', '/sign-up');
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [link] = canvas.getAllByRole('link', { name: /buy standard/i });
    await expect(
      link
    ).toHaveAttribute('href', '/profile');
    await expect(
      canvas.getByRole('table', { name: /pricing plan comparison/i })
    ).toBeInTheDocument();
  },
};
