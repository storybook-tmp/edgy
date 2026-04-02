import Team from './Team';

export default {
  title: 'AI Generated/Complex/Team',
  component: Team,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {};

export const WithSpacing = {
  decorators: [
    (Story) => (
      <div className="py-8">
        <Story />
      </div>
    ),
  ],
};
