import { config } from '../../../.storybook/preview';

import Team from './Team';

const meta = config.meta({
  title: 'AI Generated/Simple/Team',
  component: Team,
  parameters: {
    layout: 'fullscreen',
  },
});

export default meta;

export const Default = meta.story({});

export const PaddedCanvas = meta.story({
  parameters: {
    layout: 'padded',
  },
});
