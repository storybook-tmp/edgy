import CareerCta from './CareerCta';

const meta = {
  title: 'AI Generated/Simple/CareerCta',
  component: CareerCta,
};

export default meta;

export const Default = {};

export const InContext = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827' }}>
        <Story />
      </div>
    ),
  ],
};
