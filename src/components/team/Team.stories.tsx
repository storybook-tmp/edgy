import { config } from '#.storybook/preview';

import Team from './Team';

const meta = config.meta({
  title: 'AI Generated/Medium/Team',
  component: Team,
});

export const Default = meta.story();

export const ContainedSection = meta.story({
  render: () => (
    <div className="bg-gray-950 px-6 py-12">
      <Team />
    </div>
  ),
});
