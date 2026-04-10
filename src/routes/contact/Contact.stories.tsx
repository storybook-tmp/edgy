import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, waitFor } from "storybook/test";

import Contact from "./Contact";

const meta = {
  component: Contact,
} satisfies Meta<typeof Contact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("heading", { name: "Let's work together" })
    ).toBeVisible();
    await expect(canvas.getByRole("button", { name: "Submit" })).toBeVisible();
    await expect(canvas.getByLabelText("ReCAPTCHA")).toBeVisible();
  },
};

export const ValidationErrors: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Submit" }));

    await expect(canvas.getByText("Please enter first name!")).toBeVisible();
    await expect(canvas.getByText("Please enter email!")).toBeVisible();
    await expect(canvas.getByText("Please enter message!")).toBeVisible();
  },
};

export const SuccessfulRequest: Story = {
  play: async ({ canvas, canvasElement, userEvent }) => {
    const firstNameInput = canvasElement.querySelector<HTMLInputElement>(
      'input[name="firstName"]'
    );
    const lastNameInput = canvasElement.querySelector<HTMLInputElement>(
      'input[name="lastName"]'
    );
    const companyInput = canvasElement.querySelector<HTMLInputElement>(
      'input[name="company"]'
    );
    const phoneInput = canvasElement.querySelector<HTMLInputElement>(
      'input[name="phone"]'
    );
    const messageInput = canvasElement.querySelector<HTMLTextAreaElement>(
      'textarea[name="textarea"]'
    );

    if (
      !firstNameInput ||
      !lastNameInput ||
      !companyInput ||
      !phoneInput ||
      !messageInput
    ) {
      throw new Error("The contact form inputs did not render as expected.");
    }

    await userEvent.type(firstNameInput, "Morgan");
    await userEvent.type(lastNameInput, "Taylor");
    await userEvent.type(canvas.getByLabelText("Email *"), "morgan@edgy.com");
    await userEvent.type(companyInput, "Edgy");
    await userEvent.type(phoneInput, "1234567890");
    await userEvent.type(
      messageInput,
      "We would like to learn more about your growth plans."
    );
    await userEvent.click(canvas.getByRole("button", { name: "Submit" }));

    await waitFor(async () => {
      await expect(
        canvas.getByText(/thank you submitting your request/i)
      ).toBeVisible();
    });
  },
};
