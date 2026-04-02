import PricingFaq from "./PricingFaq";

const meta = {
  title: "AI Generated/Medium/PricingFaq",
  component: PricingFaq,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = {};

export const Contained = {
  render: () => (
    <section className="bg-black px-6 py-10">
      <section className="mx-auto max-w-7xl rounded-[2rem] border border-white/10">
        <PricingFaq />
      </section>
    </section>
  ),
};
