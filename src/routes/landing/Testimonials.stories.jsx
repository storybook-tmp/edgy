import Testimonials from './Testimonials';

const meta = {
  title: 'AI Generated/Medium/Testimonials',
  component: Testimonials,
};

export default meta;

export const Default = {};

export const WithDarkBackground = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#1f2937', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};
