import Team from './Team';

const meta = {
  title: 'AI Generated/Medium/Team',
  component: Team,
};

export default meta;

export const Default = {};

export const InContainer = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};
