import Partners from './Partners';

const meta = {
  title: 'AI Generated/Simple/Partners',
  component: Partners,
};

export default meta;

export const Default = {};

export const Visible = {
  decorators: [
    (Story) => (
      <div className="md:block">
        <Story />
      </div>
    ),
  ],
};
