import Team from './Team';

const meta = {
  title: 'AI Generated/Simple/Team',
  component: Team,
};

export default meta;

export const Default = {};

export const WithinDarkBackground = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900">
        <Story />
      </div>
    ),
  ],
};
