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

export const WithFraming = {
  render: () => (
    <section className="bg-gray-950 px-6 py-10">
      <section className="mx-auto max-w-5xl overflow-hidden rounded-[2rem]">
        <CareerCta />
      </section>
    </section>
  ),
};
