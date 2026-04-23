import Footer from './Footer';

const meta = {
  title: 'AI Generated/Medium/Footer',
  component: Footer,
};

export default meta;

export const Default = {};

export const WithDarkBackground = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827' }}>
        <Story />
      </div>
    ),
  ],
};
