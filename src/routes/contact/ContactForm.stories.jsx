import ContactForm from './ContactForm';

const meta = {
  title: 'AI Generated/Complex/ContactForm',
  component: ContactForm,
};

export default meta;

export const Default = {};

export const WithinCard = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};
