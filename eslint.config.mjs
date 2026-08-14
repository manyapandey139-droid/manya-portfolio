import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

/** Flat config — Next.js 16 ships these natively. */
const config = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      // Old duplicate copy of this project, not part of the build
      "portfolio/**",
    ],
  },
  ...coreWebVitals,
  ...typescript,
];

export default config;
