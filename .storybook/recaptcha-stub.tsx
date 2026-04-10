import React from 'react';

const defaultToken = 'storybook-captcha-token';

const StorybookRecaptcha = React.forwardRef(function StorybookRecaptcha(
  { sitekey }: { sitekey?: string },
  ref: React.ForwardedRef<{ getValue: () => string; reset: () => void }>
) {
  const [token, setToken] = React.useState(defaultToken);

  React.useImperativeHandle(
    ref,
    () => ({
      getValue: () => token,
      reset: () => {
        setToken(defaultToken);
      },
    }),
    [token]
  );

  return (
    <section
      aria-label="Storybook captcha"
      className="rounded-md border border-dashed border-indigo-500 bg-gray-950/40 p-3 text-sm text-gray-300"
      data-sitekey={sitekey}
    >
      <p className="font-medium text-white">Captcha ready</p>
      <p className="mt-1">
        Storybook is using a local captcha stub so the real form flow can be
        exercised in browser tests.
      </p>
      <button
        className="mt-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        onClick={() => setToken(defaultToken)}
        type="button"
      >
        Refresh captcha
      </button>
    </section>
  );
});

export default StorybookRecaptcha;
