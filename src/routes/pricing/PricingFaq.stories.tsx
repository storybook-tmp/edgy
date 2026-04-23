import { config } from '#.storybook/preview';

import PricingFaq from './PricingFaq';

const meta = config.meta({
  title: 'AI Generated/Simple/PricingFaq',
  component: PricingFaq,
});

export const Default = meta.story();

export const NarrowLayout = meta.story({
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', maxWidth: '768px' }}>
        <Story />
      </div>
    ),
  ],
});
