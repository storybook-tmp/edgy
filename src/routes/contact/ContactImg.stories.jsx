import ContactImg from './ContactImg';

const meta = {
  title: 'AI Generated/Simple/ContactImg',
  component: ContactImg,
};

export default meta;

export const Default = {};

export const WithContainer = {
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', height: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
