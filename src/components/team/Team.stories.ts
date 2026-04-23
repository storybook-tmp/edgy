import preview from '../../../.storybook/preview';

import Team from './Team';

const meta = preview.meta({
  title: 'AI Generated/Medium/Team',
  component: Team,
});

export const Default = meta.story({});

export const Padded = meta.story({
  parameters: {
    layout: 'padded',
  },
});
