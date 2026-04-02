import { config } from '#.storybook/preview';

import ContactImg from './ContactImg';

const meta = config.meta({
  title: 'AI Generated/Simple/ContactImg',
  component: ContactImg,
});

export const DesktopPane = meta.story({
  render: () => (
    <div className="relative min-h-[28rem] bg-gray-900">
      <ContactImg />
    </div>
  ),
});

export const TallPane = meta.story({
  render: () => (
    <div className="relative min-h-[40rem] bg-gray-950">
      <ContactImg />
    </div>
  ),
});
