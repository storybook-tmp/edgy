import ContactImg from "./ContactImg";

const meta = {
  title: "AI Generated/Simple/ContactImg",
  component: ContactImg,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="relative min-h-[24rem] bg-gray-900">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const MobileCrop = {};

export const DesktopSplitLayout = {
  decorators: [
    (Story) => (
      <div className="relative min-h-[36rem] bg-gray-900">
        <div className="absolute inset-y-0 left-0 flex w-1/2 items-center px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
              Contact
            </p>
            <h2 className="mt-3 text-4xl font-bold text-white">
              A right-side media panel
            </h2>
            <p className="mt-4 max-w-md text-lg text-gray-300">
              This wrapper mirrors the layout the component is designed for on
              large screens.
            </p>
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
};
