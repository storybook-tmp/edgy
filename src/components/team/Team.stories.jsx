import Team from './Team';

const meta = {
  title: 'AI Generated/Simple/Team',
  component: Team,
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
