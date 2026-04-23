import Team from './Team';

const meta = {
  title: 'AI Generated/Medium/Team',
  component: Team,
};

export default meta;

export const Default = {};

export const DarkBackground = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#111827' }}>
        <Story />
      </div>
    ),
  ],
};
