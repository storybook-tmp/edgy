import CareerCta from "./CareerCta";

const meta = {
  title: "AI Generated/Simple/CareerCta",
  component: CareerCta,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = {};

export const InConstrainedPage = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 px-6 py-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10">
          <Story />
        </div>
      </div>
    ),
  ],
};
