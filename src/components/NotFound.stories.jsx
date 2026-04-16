import NotFound from './NotFound';

const meta = {
  title: 'AI Generated/Simple/NotFound',
  component: NotFound,
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
