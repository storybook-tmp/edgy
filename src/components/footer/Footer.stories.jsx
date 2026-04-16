import Footer from './Footer';

const meta = {
  title: 'AI Generated/Simple/Footer',
  component: Footer,
};

export default meta;

export const Default = {};

export const InContainer = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};
