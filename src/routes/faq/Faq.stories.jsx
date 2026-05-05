import { expect, within, userEvent } from 'storybook/test';
import Faq from './Faq';

export default {
  component: Faq,
  tags: ['ai-generated'],
};

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText(/frequently asked questions/i),
    ).toBeVisible();
    await expect(canvas.getByText(/ready to dive in/i)).toBeVisible();
  },
};

export const WithAccordionInteraction = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    const faqButton = buttons[0];
    await expect(faqButton).toBeVisible();
    await userEvent.click(faqButton);
    const panels = canvasElement.querySelectorAll('[id^="headlessui-disclosure-panel"]');
    await expect(panels.length).toBeGreaterThanOrEqual(1);
  },
};

export const WithCtaSection = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/start your free trial today/i)).toBeVisible();
    await expect(canvas.getByRole('link', { name: /get started/i })).toBeVisible();
  },
};
