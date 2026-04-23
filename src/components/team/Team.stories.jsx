import Team from './Team';

const meta = {
  title: 'AI Generated/Medium/Team',
  component: Team,
};

export default meta;

export const Default = {};

export const WithDarkBackground = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900">
        <Story />
      </div>
    ),
  ],
};
