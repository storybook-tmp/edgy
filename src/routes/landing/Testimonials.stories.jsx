import Testimonials from "./Testimonials";

const meta = {
  title: "AI Generated/Simple/Testimonials",
  component: Testimonials,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = {};

export const Centered = {
  render: () => (
    <section className="bg-black px-6 py-12">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10">
        <Testimonials />
      </section>
    </section>
  ),
};
