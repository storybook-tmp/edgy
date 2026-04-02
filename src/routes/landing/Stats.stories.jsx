import Stats from './Stats';

const meta = {
  title: 'AI Generated/Simple/Stats',
  component: Stats,
};

export default meta;

export const Default = {};

export const FullWidth = {
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};
