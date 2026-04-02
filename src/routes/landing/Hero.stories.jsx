import Hero from './Hero';

export default {
  title: 'AI Generated/Medium/Hero',
  component: Hero,
};

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
