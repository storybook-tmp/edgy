import { forwardRef, useImperativeHandle } from 'react';

const CAPTCHA_TOKEN = 'storybook-captcha-token';

const RecaptchaMock = forwardRef(function RecaptchaMock(_props, ref) {
  useImperativeHandle(
    ref,
    () => ({
      getValue() {
        return CAPTCHA_TOKEN;
      },
      reset() {},
    }),
    []
  );

  return (
    <div className="rounded-md border border-dashed border-indigo-400 bg-gray-800/70 px-4 py-3 text-sm text-gray-200">
      Storybook reCAPTCHA check
    </div>
  );
});

export default RecaptchaMock;
