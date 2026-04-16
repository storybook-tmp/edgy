import { Button } from './Button';

const meta = {
  title: 'AI Generated/Simple/Button',
  component: Button,
};

export default meta;

export const Primary = {
  args: {
    primary: true,
    label: 'Click me',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
  },
};

export const Large = {
  args: {
    primary: true,
    size: 'large',
    label: 'Large Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};
