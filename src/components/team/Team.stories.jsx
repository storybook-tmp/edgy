import Team from './Team';

const meta = {
  title: 'AI Generated/Medium/Team',
  component: Team,
};

export default meta;

export const Default = {};

export const FullWidth = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '100%' }}>
        <Story />
      </div>
    ),
  ],
};
