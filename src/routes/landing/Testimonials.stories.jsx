import Testimonials from './Testimonials';

const meta = {
  title: 'AI Generated/Simple/Testimonials',
  component: Testimonials,
};

export default meta;

export const Default = {};

export const InContainer = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};
