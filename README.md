# J. Will Locksmith website

This repository is ready for direct deployment to Cloudflare Workers.

Required deployment files are included:

- `worker/index.ts`
- `wrangler.jsonc`
- `vite.config.ts`
- `package.json`

Cloudflare Workers Builds settings:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: leave blank

The project contains no OpenAI Sites plugin and does not require an `.openai` folder.
