import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import ContactForm from './ContactForm';

const meta = {
  component: ContactForm,
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ContactForm />,
  play: async ({ canvas }) => {
    const inputs = canvas.queryAllByRole('textbox');
    await expect(inputs.length).toBeGreaterThan(0);
    await expect(
      canvas.getByRole('button', { name: /submit/i })
    ).toBeVisible();
  },
};
