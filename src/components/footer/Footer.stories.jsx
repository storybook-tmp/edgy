import Footer from './Footer';

export default {
  title: 'AI Generated/Medium/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {};

export const WithPadding = {
  decorators: [
    (Story) => (
      <div className="py-8">
        <Story />
      </div>
    ),
  ],
};
