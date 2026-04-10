import { forwardRef, useImperativeHandle, useState } from 'react';

const MockRecaptcha = forwardRef(function MockRecaptcha(_, ref) {
  const [verified, setVerified] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      getValue() {
        return verified ? 'storybook-captcha-token' : '';
      },
      reset() {
        setVerified(false);
      },
    }),
    [verified]
  );

  return (
    <label className="flex items-center gap-3 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900">
      <input
        aria-label="Verify reCAPTCHA"
        checked={verified}
        onChange={(event) => setVerified(event.target.checked)}
        type="checkbox"
      />
      <span>{verified ? 'reCAPTCHA verified' : 'Verify reCAPTCHA'}</span>
    </label>
  );
});

export default MockRecaptcha;
