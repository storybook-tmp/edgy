import ContactImg from "./ContactImg";

const meta = {
  title: "AI Generated/Simple/ContactImg",
  component: ContactImg,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = {};

export const Framed = {
  render: () => (
    <section className="bg-gray-900 p-6">
      <section className="relative mx-auto h-[28rem] max-w-4xl overflow-hidden rounded-3xl">
        <ContactImg />
      </section>
    </section>
  ),
};
