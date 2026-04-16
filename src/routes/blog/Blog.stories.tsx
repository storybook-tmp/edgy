import type { Meta, StoryObj } from "@storybook/react-vite";
import Blog from "./Blog";

const meta = {
  component: Blog,
  parameters: {
    routePath: "/blog",
  },
} satisfies Meta<typeof Blog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Blog />,
};
