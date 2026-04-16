import Team from "./Team";

const meta = {
  title: "AI Generated/Medium/Team",
  component: Team,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = {};

export const Inset = {
  render: () => (
    <section className="bg-black px-6 py-10">
      <section className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10">
        <Team />
      </section>
    </section>
  ),
};
