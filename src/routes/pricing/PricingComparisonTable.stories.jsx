import { expect } from 'storybook/test';
import PricingComparisonTable from './PricingComparisonTable';

const meta = {
  component: PricingComparisonTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const LoggedOut = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('table', { name: /pricing plan comparison/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('columnheader', { name: /standard/i })
    ).toBeVisible();
    const visibleMonthlyReport = canvas
      .getAllByText(/monthly progress report/i)
      .find((element) => element.offsetParent !== null);

    await expect(visibleMonthlyReport).toBeDefined();
    await expect(visibleMonthlyReport).toBeVisible();
    await expect(
      canvas.getAllByRole('link', { name: /buy standard/i })[0]
    ).toHaveAttribute('href', '/sign-up');
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('columnheader', { name: /premium/i })
    ).toBeVisible();
    await expect(
      canvas.getAllByRole('link', { name: /buy premium/i })[0]
    ).toHaveAttribute('href', '/profile');
  },
};
