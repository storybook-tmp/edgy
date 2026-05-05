import { fn, expect } from 'storybook/test';
import Navigation from './Navigation';

const meta = {
  component: Navigation,
  tags: ['ai-generated'],
  args: {
    loggedIn: false,
    setLoggedIn: fn(),
    setTriggeredLogout: fn(),
  },
};

export default meta;

export const LoggedOut = {
  args: {
    loggedIn: false,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Sign in')).toBeVisible();
    await expect(canvas.getByText('Sign up')).toBeVisible();
    await expect(canvas.getByAltText('Edgy')).toBeVisible();
  },
};

export const LoggedIn = {
  args: {
    loggedIn: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Sign out')).toBeVisible();
    await expect(canvas.getByText('Profile')).toBeVisible();
    await expect(canvas.getByAltText('Edgy')).toBeVisible();
  },
};

export const NavigationLinks = {
  play: async ({ canvas }) => {
    const aboutLinks = canvas.getAllByText('About');
    await expect(aboutLinks.length).toBeGreaterThanOrEqual(1);
    const pricingLinks = canvas.getAllByText('Pricing');
    await expect(pricingLinks.length).toBeGreaterThanOrEqual(1);
    const blogLinks = canvas.getAllByText('Blog');
    await expect(blogLinks.length).toBeGreaterThanOrEqual(1);
    const faqLinks = canvas.getAllByText('FAQ');
    await expect(faqLinks.length).toBeGreaterThanOrEqual(1);
    const contactLinks = canvas.getAllByText('Contact');
    await expect(contactLinks.length).toBeGreaterThanOrEqual(1);
  },
};
