import { config } from '#.storybook/preview';

import Team from './Team';

const meta = config.meta({
  title: 'AI Generated/Simple/Team',
  component: Team,
});

export const Default = meta.story();

export const CompactGrid = meta.story({
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', maxWidth: '900px' }}>
        <Story />
      </div>
    ),
  ],
});
