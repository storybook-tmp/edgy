import Partners from './Partners';

const meta = {
  title: 'AI Generated/Simple/Partners',
  component: Partners,
};

export default meta;

export const Default = {};

export const FullWidth = {
  decorators: [
    (Story) => (
      <div style={{ width: '100%', backgroundColor: '#111827' }}>
        <Story />
      </div>
    ),
  ],
};
