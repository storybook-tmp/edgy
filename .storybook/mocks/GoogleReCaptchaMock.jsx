import { forwardRef, useImperativeHandle, useState } from "react";

const defaultToken = "storybook-captcha-token";

const GoogleReCaptchaMock = forwardRef(function GoogleReCaptchaMock(
  { sitekey },
  ref
) {
  const [token, setToken] = useState(defaultToken);

  useImperativeHandle(
    ref,
    () => ({
      getValue() {
        return token;
      },
      reset() {
        setToken(defaultToken);
      },
    }),
    [token]
  );

  return (
    <div className="rounded-md border border-dashed border-indigo-500/70 bg-gray-950/60 px-4 py-3 text-sm text-indigo-200">
      ReCAPTCHA placeholder
      <div className="mt-1 text-xs text-gray-400">
        Site key: {sitekey || "storybook-captcha-key"}
      </div>
    </div>
  );
});

export default GoogleReCaptchaMock;
