import { forwardRef, useImperativeHandle } from 'react';

type MockReCAPTCHAHandle = {
  executeAsync?: () => Promise<string>;
  getValue: () => string;
  reset: () => void;
};

type MockReCAPTCHAProps = {
  sitekey?: string;
};

const MockReCAPTCHA = forwardRef<MockReCAPTCHAHandle, MockReCAPTCHAProps>(
  function MockReCAPTCHA({ sitekey }, ref) {
    useImperativeHandle(
      ref,
      () => ({
        executeAsync: async () => 'storybook-captcha-token',
        getValue: () => 'storybook-captcha-token',
        reset: () => undefined,
      }),
      []
    );

    return (
      <div
        aria-label="Mock reCAPTCHA"
        className="w-full rounded-md border border-dashed border-indigo-400 bg-gray-800/60 px-4 py-3 text-sm text-white"
        role="group"
      >
        <p className="font-semibold">reCAPTCHA</p>
        <p className="mt-1 text-gray-300">
          Storybook uses a deterministic widget placeholder instead of the live
          Google embed.
        </p>
        {sitekey ? (
          <p className="mt-2 text-xs text-gray-400">Site key: {sitekey}</p>
        ) : null}
      </div>
    );
  }
);

export default MockReCAPTCHA;
