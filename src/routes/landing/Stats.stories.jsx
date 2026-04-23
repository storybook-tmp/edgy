import Stats from './Stats';

const meta = {
  title: 'AI Generated/Simple/Stats',
  component: Stats,
};

export default meta;

export const Default = {};

export const WithContainer = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};
