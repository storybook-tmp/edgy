import { config } from '#.storybook/preview';

import CareerCta from './CareerCta';

const meta = config.meta({
  title: 'AI Generated/Simple/CareerCta',
  component: CareerCta,
});

export const Default = meta.story();

export const FramedSection = meta.story({
  render: () => (
    <div className="bg-gray-900 px-6 py-10">
      <CareerCta />
    </div>
  ),
});
