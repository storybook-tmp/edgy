import NotFound from './NotFound';

const meta = {
  title: 'AI Generated/Simple/NotFound',
  component: NotFound,
};

export default meta;

export const Default = {};

export const FullPage = {
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};
