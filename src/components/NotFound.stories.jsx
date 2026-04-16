import NotFound from './NotFound';

const meta = {
  title: 'AI Generated/Simple/NotFound',
  component: NotFound,
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
