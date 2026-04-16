import Footer from './Footer';

export default {
  title: 'AI Generated/Simple/Footer',
  component: Footer,
};

export const Default = {};

export const WithLayout = {
  decorators: [
    (Story) => (
      <div style={{ minHeight: '200px' }}>
        <Story />
      </div>
    ),
  ],
};
