import Stats from './Stats';

const meta = {
  title: 'AI Generated/Simple/Stats',
  component: Stats,
};

export default meta;

export const Default = {};

export const WithBackground = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827' }}>
        <Story />
      </div>
    ),
  ],
};
