import Footer from './Footer';

const meta = {
  title: 'AI Generated/Complex/Footer',
  component: Footer,
};

export default meta;

export const Default = {};

export const InDarkContainer = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827' }}>
        <Story />
      </div>
    ),
  ],
};
