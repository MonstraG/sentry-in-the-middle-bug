Steps:

1. clone
2. `pnpm i`
3. `pnpm run dev`
4. open `localhost:3000`
5. check terminal where you did `pnpm run dev`

In my case it does:
```
> sentry-in-the-middle-bug@0.1.0 dev /sentry-in-the-middle-bug
> next dev --turbo

   ▲ Next.js 15.3.3 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://192.168.10.132:3000
   - Experiments (use with caution):
     · clientTraceMetadata

 ✓ Starting...
 ✓ Compiled instrumentation Node.js in 13ms
 ✓ Compiled instrumentation Edge in 15ms
 ✓ Ready in 778ms
 ⚠ Webpack is configured while Turbopack is not, which may cause problems.
 ⚠ See instructions if you need to configure Turbopack:
  https://nextjs.org/docs/app/api-reference/next-config-js/turbo

 ○ Compiling / ...
 ✓ Compiled / in 856ms
 ⚠ ./node_modules/.pnpm/@opentelemetry+instrumentation@0.57.2_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/instrumentation/build/esm/platform/node
Package import-in-the-middle can't be external
The request import-in-the-middle matches serverExternalPackages (or the default list).
The request could not be resolved by Node.js from the project directory.
Packages that should be external need to be installed in the project directory, so they can be resolved from the output files.
Try to install it into the project directory by running npm install import-in-the-middle from the project directory.


 ⚠ ./node_modules/.pnpm/@sentry+node@9.29.0/node_modules/@sentry/node/build/cjs/sdk
Package import-in-the-middle can't be external
The request import-in-the-middle matches serverExternalPackages (or the default list).
The request could not be resolved by Node.js from the project directory.
Packages that should be external need to be installed in the project directory, so they can be resolved from the output files.
Try to install it into the project directory by running npm install import-in-the-middle from the project directory.


 ⚠ ./node_modules/.pnpm/@opentelemetry+instrumentation@0.57.2_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/instrumentation/build/esm/platform/node
Package require-in-the-middle can't be external
The request require-in-the-middle matches serverExternalPackages (or the default list).
The request could not be resolved by Node.js from the project directory.
Packages that should be external need to be installed in the project directory, so they can be resolved from the output files.
Try to install it into the project directory by running npm install require-in-the-middle from the project directory.
```
