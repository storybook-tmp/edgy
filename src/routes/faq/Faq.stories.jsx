import { expect } from 'storybook/test';
import Faq from './Faq';

const meta = {
  component: Faq,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Frequently Asked Questions')).toBeVisible();
  },
};

export const HasCtaSection = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Ready to dive in?')).toBeVisible();
    await expect(canvas.getByText('Get started')).toBeVisible();
  },
};

export const FaqContent = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/How does Edgy work/i)).toBeVisible();
  },
};
