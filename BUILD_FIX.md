# Build fix

The `@/*` path alias is defined in `jsconfig.json`, so imports such as
`@/components/Header` resolve correctly in Next.js and Vercel.

Run from the folder containing `package.json`:

```bash
npm install
npm run dev
```
