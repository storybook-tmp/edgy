import Partners from './Partners';

const meta = {
  title: 'AI Generated/Simple/Partners',
  component: Partners,
};

export default meta;

export const Default = {};

export const InContext = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};
