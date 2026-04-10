import React, { forwardRef, useImperativeHandle, useState } from "react";

const DEFAULT_TOKEN = "storybook-captcha-token";

const StorybookReCAPTCHA = forwardRef(function StorybookReCAPTCHA(
  { sitekey }: { sitekey?: string },
  ref: React.ForwardedRef<{
    getValue: () => string;
    reset: () => void;
  }>
) {
  const [token, setToken] = useState(DEFAULT_TOKEN);

  useImperativeHandle(
    ref,
    () => ({
      getValue() {
        return token;
      },
      reset() {
        setToken(DEFAULT_TOKEN);
      },
    }),
    [token]
  );

  return (
    <div
      aria-label="ReCAPTCHA"
      data-sitekey={sitekey}
      className="flex min-h-20 items-center rounded-md border border-dashed border-gray-500 bg-gray-800 px-4 py-3 text-sm text-gray-200"
    >
      Storybook reCAPTCHA is ready.
    </div>
  );
});

StorybookReCAPTCHA.displayName = "StorybookReCAPTCHA";

export default StorybookReCAPTCHA;
